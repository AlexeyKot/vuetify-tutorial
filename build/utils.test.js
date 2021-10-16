const utils = require("./utils")
// @ponicode
describe("utils.assetsPath", () => {
    test("0", () => {
        let callFunction = () => {
            utils.assetsPath("./path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.assetsPath("path/to/file.ext")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.assetsPath("C:\\\\path\\to\\folder\\")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.assetsPath(".")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.assetsPath("/path/to/file")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.assetsPath(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.cssLoaders", () => {
    test("0", () => {
        let callFunction = () => {
            utils.cssLoaders({ sourceMap: true, usePostCSS: true, extract: "George" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            utils.cssLoaders({ sourceMap: true, usePostCSS: true, extract: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            utils.cssLoaders({ sourceMap: false, usePostCSS: false, extract: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            utils.cssLoaders({ sourceMap: true, usePostCSS: false, extract: "Anas" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            utils.cssLoaders({ sourceMap: false, usePostCSS: true, extract: "Pierre Edouard" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.cssLoaders(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.styleLoaders", () => {
    test("0", () => {
        let param1 = [["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"]]
        let callFunction = () => {
            utils.styleLoaders(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1 = [["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], false]
        let callFunction = () => {
            utils.styleLoaders(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1 = [["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], true]
        let callFunction = () => {
            utils.styleLoaders(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1 = [["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], true, ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"]]
        let callFunction = () => {
            utils.styleLoaders(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1 = [false, ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"], ["--testrunner=", "--%s", "-created", "-updated", "-resolved", "--email", "--pw", "--domain", "--localtime", "--utc", "--count", "--topcount", "unknown option: ", "--user", "--embed", "--include-dir", "--cleanup", "--annotate-coverage", "--convert-range", "--line-directives", "--no-c-in-traceback", "--gdb", "--gdb-outdir", "--lenient", -2, -3, "--capi-reexport-cincludes", "--fast-fail", "--old-style-globals", "--directive", "Unknown debug flag: %s\n", "Unknown compiler flag: %s\n", "-u", "--image", "-i"]]
        let callFunction = () => {
            utils.styleLoaders(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            utils.styleLoaders(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("utils.createNotifierCallback", () => {
    test("0", () => {
        let callFunction = () => {
            utils.createNotifierCallback()
        }
    
        expect(callFunction).not.toThrow()
    })
})
