import { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";

export const CalendarMaximized = ({ setData, data }) => {
    const [selected, setSelected] = useState("");

    const currentDate = new Date();
    const startingDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate()
    );

    LocaleConfig.locales["pt-br"] = {
        monthNames: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ],
        monthNamesShort: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
        ],
        dayNames: [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado",
        ],
        dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    };
    LocaleConfig.defaultLocale = "pt-br";

    return (
        <Calendar
            style={{
                width: `100%`,
                alignSelf: "center",
                backgroundColor: "#FAFAFA",
                borderRadius: 20,
                marginBottom: 20
            }}
            onDayPress={(day) => {
                setData(day.dateString)
            }}
            markedDates={{
                [data]: {
                    selected: true,
                    disableTouchEvent: true,
                },
            }}
            minDate={startingDate.toString()}
            theme={{
                calendarBackground: "#FAFAFA",
                arrowColor: "#8531C6",
                textDisabledColor: "#C6C5CE",
                todayTextColor: "#5F5C6B",
                selectedDayTextColor: "#FAFAFA",
                selectedDayBackgroundColor: "#8531C6",

                textDayFontSize: 16,
                textMonthFontSize: 20,
                textDayHeaderFontSize: 12,

                textDayStyle: { color: "#8531C6" },

                textDayFontFamily: "LouisGeorgeCafe-Bold",
                textDayHeaderFontFamily: "LouisGeorgeCafe-Bold",
                textMonthFontFamily: "MoonGet",
            }}
            hideArrows={true}
            enableSwipeMonths={true}
        />
    );
};