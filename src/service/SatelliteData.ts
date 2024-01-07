import { ISatellite } from "../types/ISatelliteData";

const satelliteData: ISatellite[] = [
    {
        id: "d6f53aeb-1a12-4e87-a5f4-9b8f3f7c583e",
        name: "INSAT-1A",
        description: "Indian National Satellite System",
        nomad_id: "ISRO-001",
        orbit_type: "Geostationary",
        launch_date: "1982-04-10",
        purpose: "Communication",
        status: "Retired",
    },
    {
        id: "0f39b952-81e4-4955-a8e2-64e31c9f0d63",
        name: "IRS-1C",
        description: "Indian Remote Sensing Satellite",
        nomad_id: "ISRO-002",
        orbit_type: "Sun-Synchronous",
        launch_date: "1995-12-28",
        purpose: "Earth Observation",
        status: "Operational",
    },
    {
        id: "e84f1e2d-3a75-4c68-80df-171be680fe44",
        name: "NAVIC-1",
        description: "Navigation with Indian Constellation",
        nomad_id: "ISRO-003",
        orbit_type: "Geostationary",
        launch_date: "2013-07-01",
        purpose: "Navigation",
        status: "Operational",
    },
    {
        id: "57e3d7f8-c6d2-4f4b-a00c-5c2ef04da383",
        name: "GSAT-30",
        description: "Communication Satellite",
        nomad_id: "ISRO-004",
        orbit_type: "Geostationary",
        launch_date: "2020-01-17",
        purpose: "Communication",
        status: "Operational",
    },
    {
        id: "a8a6a446-2b95-45f4-bf3b-3eae189c1d9c",
        name: "Astrosat",
        description: "India's first dedicated multi-wavelength space observatory",
        nomad_id: "ISRO-005",
        orbit_type: "Low Earth Orbit",
        launch_date: "2015-09-28",
        purpose: "Astronomy",
        status: "Operational",
    },
];

export default satelliteData;