import { Text, View, Image } from "react-native";
import { styles } from "./appointment.style";
import icon from "../../constants/icon";
import Button from "../../components/button/button.js";

function Appointment(props) {

    // Formatar Data
    const formatdate = new Date(props.bookingDate + "T" + props.bookingHour)

    return (
        <View style={styles.appointment}>
            <Text style={styles.name}>
                {props.service} - {props.doctor}
            </Text>
            <Text style={styles.spcecialty}>
                {props.spcecialty}
            </Text>

            <View style={styles.container}>

                <View style={styles.containerBooking}>

                    <View style={styles.booking}>
                        <Image style={styles.icon}
                            source={icon.calendar}/>
                        <Text style={styles.bookingDate}>
                            {formatdate.toLocaleDateString()}
                        </Text>
                    </View>

                    <View style={styles.booking}>
                        <Image style={styles.icon}
                            source={icon.clock}/>
                        <Text style={styles.bookingHour}>
                            {props.bookingHour}h
                        </Text>
                    </View>

                </View>

                <View style={styles.containerButton}>
                    <Button text="Cancelar Reserva" theme="danger"
                    onPress={() => props.onPress(props.id_appointment)} />
                </View>

            </View>

        </View>
    )
}

export default Appointment