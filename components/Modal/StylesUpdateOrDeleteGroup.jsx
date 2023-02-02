import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "right"
    },
    paper: {
        position: "relative",
        width: 251,
        height: 533,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display: "flex",
        flexDirection: "column"
    },
    title: {
        fontWeight: "bold",
        marginBottom: theme.spacing(2)
    },
    subtitle: {
        marginBottom: theme.spacing(3)
    },

    TableRow: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
    },

    tabs: {
        width: "280px",
        maxWidth: "280px",
        minWidth: "280px",
        textTransform: "none",
        color: "inherit",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        "& svg": {
            marginRight: theme.spacing(1)
        }
    },
    selectedTab: {
        width: "80px",
        maxWidth: "80px",
        minWidth: "80px",
        textAlign: "center",
        fontSize: "10px",
        padding: "5px"
    },
    searchWrapper: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "50px",
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        border: "0.5px solid #828A99",
        borderRadius: "5px",
        opacity: "1"
    },
    searchField: {
        "& label.Mui-focused": {
            color: "#828A99"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#828A99"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#828A99"
            },
            "&:hover fieldset": {
                borderColor: "#828A99"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#828A99"
            }
        }
    },
    searchInput: {
        width: "100%"
    },
    table: {
        minWidth: 400
    },
    tableRow: {
        "&:hover": {
            backgroundColor: theme.palette.action.hover
        }

    },
    tableCell: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: 200
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: theme.spacing(3)
    },
    button: {
        marginLeft: theme.spacing(2)
    },
    buttons: {
        position: "absolute",
        bottom: "10px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
    },
    buttonLeft: {
        width: "100px",
        marginLeft: theme.spacing(2),
        background: "white",
        borderRadius: "5px",
        opacity: 1,
        border: "1px solid red",
        color: "red"

    },
    listWrapper: {
        height: "300px",
        overflowY: "scroll"


    },
    buttonRight: {
        width: "100px",
        backgroundColor: "white",
        border: "1px solid #0077C8",
        marginLeft: theme.spacing(2),
        font: "var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-medium) var(--unnamed-font-size-20)/var(--unnamed-line-spacing-24) var(--unnamed-font-family-montserrat)",
        letterSpacing: "var(--unnamed-character-spacing-0)",
        color: "#0077C8",
        textAlign: "center",
        font: " normal normal medium 20px/24px Montserrat",
        letterSpacing: "0px",
        opacity: 1
    },
    close: {
        padding: theme.spacing(0.5),
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        top: "10px",
        right: "50px",
        width: "20px",
        height: "20px",
        background: "white 0% 0% no-repeat padding-box",
        opacity: 1,
        color: "#828A99",
        opacity: "100%"
    },
}))

export default useStyles