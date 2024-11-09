import { FlatList, View, Alert } from "react-native";
import { styles } from "./abacalendar.style.js";
import { appointments } from "../../constants/data.js";
import Appointment from "../../components/appointment/appointment.js";
import { useState, useEffect } from "react";
import api from "../../constants/api.js";

function AbaCalendar() {

    const [appointments, SetAppointments] = useState([]);

    async function LoadAppointments() {
        try {
            const response = await api.get("/appointments/");

            if (response.data) {
                SetAppointments(response.data);
            }

        } catch (error) {
            if (error.response?.data.error) {
                Alert.alert(error.response.data.error);
            } else {
                Alert.alert("Ocorreu um erro nesse momento!");
            }
        }
    }

    async function DeleteAppointments(id_appointment) {
        try {
            const response = await api.delete("/appointments/" + id_appointment);

            if (response.data?.id_appointment) {
                LoadAppointments(response.data);
            }

        } catch (error) {
            if (error.response?.data.error) {
                Alert.alert(error.response.data.error);
            } else {
                Alert.alert("Ocorreu um erro nesse momento!");
            }
        }
    }

    useEffect(() => {
        DeleteAppointments();
    }, []);

    return (
    <View style={styles.container}>

        <FlatList data={appointments}
                    keyExtractor={(appoint) => appoint.id_appointment}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => {
                        return <Appointment id_appointment={item.id_appointment}
                        doctor={item.doctor}
                        service={item.service}
                        spcecialty={item.spcecialty} 
                        bookingDate={item.booking_date}
                        bookingHour={item.booking_hour}
                        onPress={DeleteAppointments} />
                    }} />
    </View>
    )
}

export default AbaCalendar;