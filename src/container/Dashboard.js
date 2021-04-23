import React, { Component } from "react";
import { AppointmentCard } from "../components/appoinmentCard/AppointmentCard";
import { AppointmentList } from "../container/AppointmentsList/AppointementList";
import { Appointment } from "../components/Appoinment/Appointments";
import './Home.scss';
import { Header } from "../components/header/Header";

export function Dashboard(props) {

    return (
        <>
            <AppointmentList>
                <AppointmentCard></AppointmentCard>
            </AppointmentList>
        </>

    )
}