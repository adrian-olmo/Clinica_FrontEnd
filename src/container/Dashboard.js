import React, { Component } from "react";
import { Header } from "../components/header/Header";
import { AppointmentList } from "../container/AppointmentsList/AppointementList";
import './Home.scss';

export function Dashboard(props) {

    return (
        <>
            <Header />
            <AppointmentList />
        </>

    )
}