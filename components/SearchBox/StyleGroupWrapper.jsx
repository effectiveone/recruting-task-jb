
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: "100%",
        backgroundColor: "white",
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "10px"
    },
    container: {
        alignItems: "center"
    },


    button: {
        background: "var(--logifleet-blue) 0% 0% no-repeat padding-box",
        background: "#0077C8 0% 0% no-repeat padding-box",
        borderRadius: "5px",
        opacity: 1,
        color: "white",
        opacity: "100%"
    },
}))

export { useStyles }