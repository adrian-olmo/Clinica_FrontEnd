import React, { Component } from "react";
import { AppointmentCard } from "../components/appoinmentCard/AppointmentCard";
import { AppointmentList } from "../container/AppointmentsList/AppointementList";
import { Appointment } from "../components/Appoinment/Appointments";
import './Home.scss';

export function Dashboard(props) {

    return (
        <>
            <AppointmentList>
                <AppointmentCard></AppointmentCard>
            </AppointmentList>
        </>

    )
}