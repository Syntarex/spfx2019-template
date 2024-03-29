"use strict";

const gulp = require("gulp");
const build = require("@microsoft/sp-build-web");
const path = require("path");

// warnings are aborting the ship task, so suppress them
build.addSuppression(/Warning - \[sass\] The local CSS class .* is not camelCase and will not be type-safe./gi);
build.addSuppression(/Warning - \[sass\] .* filename should end with module.scss/gi);
build.addSuppression(/.*Cannot find source file.*/gi); // fix source map loader warnings

// force use of projects specified typescript version
const typeScriptConfig = require("@microsoft/gulp-core-build-typescript/lib/TypeScriptConfiguration");
typeScriptConfig.TypeScriptConfiguration.setTypescriptCompiler(require("typescript"));

// force use of projects specified react version
build.configureWebpack.mergeConfig({
    additionalConfiguration: (generatedConfiguration) => {
        generatedConfiguration.externals = generatedConfiguration.externals.filter(
            (name) => !["react", "react-dom"].includes(name),
        );

        generatedConfiguration.module.rules.push({
            test: /\.js$/,
            include: [
                path.resolve(__dirname, "node_modules/.pnpm/recoil@0.7.7_react-dom@16.12.0_react@16.12.0/node_modules/recoil/es"),
                path.resolve(__dirname, "node_modules/.pnpm/datagrid-extension@2.6.0/node_modules/datagrid-extension/lib"),
            ],
            use: [
                {
                    loader: 'thread-loader',
                    options: {
                        workers: require('os').cpus().length - 1,
                    },
                },
                {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [],
                        cacheDirectory: true,
                    },
                }
            ],
        });

        return generatedConfiguration;
    },
});

build.initialize(require("gulp"));

gulp.task("version-sync", (done) => {
    // import gulp utilits to write error messages
    const gutil = require("gulp-util");

    // import file system utilities form nodeJS
    const fs = require("fs");

    // read package.json
    var pkgConfig = require("./package.json");

    // read configuration of web part solution file
    var pkgSolution = require("./config/package-solution.json");

    // log old version
    gutil.log("Old Version:\t" + pkgSolution.solution.version);

    // Generate new MS compliant version number
    var newVersionNumber = pkgConfig.version.split("-")[0] + ".0";

    // assign newly generated version number to web part version
    pkgSolution.solution.version = newVersionNumber;

    // log new version
    gutil.log("New Version:\t" + pkgSolution.solution.version);

    // write changed package-solution file
    fs.writeFile("./config/package-solution.json", JSON.stringify(pkgSolution, null, 4), () => {
        gutil.log("Successfully written new version!");
        done();
    });
});
