
import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
    
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
        marginBottom: 20
    }, 

    theme: {
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#dd99ee'
    },

    textHour:{
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        color: COLORS.gray2,
        marginTop: 20
    }
}