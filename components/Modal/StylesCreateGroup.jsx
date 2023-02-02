import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    header: {
        position: "absolute",
        top: "0px",
        left: "0px",
        color: "white",
        font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-25)/var(--unnamed-line-spacing-30) var(--unnamed-font-family-montserrat)",
        letterSpacing: " var(--unnamed-character-spacing-0)",
        textAlign: "left",
        letterSpacing: "0px",
        width: "100%",
        borderRadius: "15px 15px 0px 0px",
        background: "var(--logifleet-blue) 0% 0% no-repeat padding-box",
        background: " #0077C8 0% 0% no-repeat padding-box",
        height: "70px",
        display: "flex",
        flexDirection: "row",

    },
    headerTitle: {
        marginLeft: "10px"
    },

    paper: {
        height: "413px",
        width: "412px",
        borderRadius: "15px 15px 0px 0px",
        position: "relative",
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display: 'flex',
        flexDirection: 'column'
    },
    message: {
        display: "flex",
        flexDirection: "row",
        position: "relative"
    },
    messageDot: {
        color: "red",
        position: "absolute",
        top: "-20px"
    },
    close: {
        padding: theme.spacing(0.5),
        position: "absolute",
        top: "10px",
        right: "10px",
        width: "20px",
        height: "20px",
        background: " #0077C8 0% 0% no-repeat padding-box",
        color: "white",
        opacity: "100%"
    },
    input: {
        marginBottom: theme.spacing(2)
    },
    select: {
        marginBottom: theme.spacing(2)
    },
    textarea: {
        marginBottom: theme.spacing(2),
        height: "300px"
    },

    buttons: {
        position: "absolute",
        bottom: "150px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
    },
    body: {
        position: "absolute",
        top: "100px",
        display: "flex",
        flexDirection: "column",
        width: "90%"
    },
    buttonLeft: {
        width: "190px",
        marginLeft: theme.spacing(2),
        background: "var(--secondary-gray) 0% 0% no-repeat padding-box",
        background: "#565B6A 0% 0% no-repeat padding-box",
        borderRadius: "5px",
        opacity: 1

    },
    buttonRight: {
        width: "190px",
        backgroundColor: "#0077C8",
        marginLeft: theme.spacing(2),
        font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-24) var(--unnamed-font-family-montserrat)",
        letterSpacing: "var(--unnamed-character-spacing-0)",
        color: "var(--white)",
        textAlign: "center",
        font: " normal normal medium 20px/24px Montserrat",
        letterSpacing: "0px",
        opacity: 1
    }
}))

export default useStyles