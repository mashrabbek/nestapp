import * as local_strategy from "./local.strategy"
import * as auth_service from "./auth.service"
import * as user_service from "../../user/services/user.service"
import * as auth_util from "../../../common/utils/auth.util"
import * as api_config_service from "../../../shared/services/api-config.service"

// @ponicode
describe("validate", () => {
    let inst: any
    let inst2: any
    let inst3: any
    let inst4: any
    let inst5: any

    beforeEach(() => {
        inst = new auth_util.AuthUtils()
        inst2 = new user_service.UserService(undefined, inst)
        inst3 = new api_config_service.ApiConfigService(undefined)
        inst4 = new auth_service.AuthService(inst2, undefined, inst3)
        inst5 = new local_strategy.LocalStrategy(inst4)
    })

    test("0", async () => {
        await inst5.validate("user-name", "accessdenied4u")
    })

    test("1", async () => {
        await inst5.validate("user-name", "!Lov3MyPianoPony")
    })

    test("2", async () => {
        await inst5.validate("user name", "$p3onyycat")
    })

    test("3", async () => {
        await inst5.validate("user-name", "NoWiFi4you")
    })

    test("4", async () => {
        await inst5.validate("user123", "NoWiFi4you")
    })

    test("5", async () => {
        await inst5.validate("", "")
    })
})
