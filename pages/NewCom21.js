
/*jshint esversion: 8 */
import { React, html } from "../web_modules/preact-htm/index.js";
import { useModule } from "../web_modules/react-hook-module/index.js";
import { RHForm } from "../web_modules/react-hook-module/plugin_form.js";
import PluginMUI from "../web_modules/react-hook-module/plugin_mui.js";
import { IconButton } from "../web_modules/material-ui/index.js";
import { makeStyles } from "../web_modules/material-ui/index.js";
import { Icon } from "../web_modules/material-ui/index.js";

const useStyles4basic = makeStyles(theme => ({
    item: {
        margin: theme.spacing(1)
    },
    container: {
        padding: theme.spacing(1)
    }
}));

const Module = props => {
    const styles_basic = useStyles4basic(props || {});
    const [defaultState, setDefaultState] = React.useState({
    });
    const {
        module,
        router,
        request,
        auth
    } = useModule(props, {
    });

    return html`
        <${React.Fragment}>
            <${RHForm} key="dipczdzw">
                Add fields here...
            </${RHForm}>
            <${IconButton} usemodule_lock className=${styles_basic.item} key="5we2yr4l" onClick=${ ( e ) => alert( e ) }>
                <${Icon} usemodule_lock usemodule_lock_inner>
                    save
                </${Icon}>
            </${IconButton}>
        </${React.Fragment}>
    `;
};

export default Module;