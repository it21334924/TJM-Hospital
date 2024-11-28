import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function GetPatient() {
    const [patient, setPatient] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    // Fetch patient details by ID
    const getPatientDetails = () => {
        axios.get(`http://localhost:8040/patient/get/${id}`)
            .then((res) => {
                const patientData = res.data; // Adjust based on actual response structure
                setPatient(patientData);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    useEffect(() => {
        getPatientDetails();
    }, [id]);

    // Delete patient record
    const deletePatient = () => {
        if (window.confirm("Are you sure you want to delete this patient?")) {
            axios.delete(`http://localhost:8040/patient/delete/${id}`)
                .then(() => {
                    toast.success("Patient record deleted successfully.");
                    setTimeout(() => {
                        window.location.replace('/patients');
                    }, 1000);
                })
                .catch((err) => {
                    toast.error(err.message);
                });
        }
    };

    if (!patient) {
        return <p>Loading...</p>;
    }

    const {
        firstName,
        age,
        gender,
        status,
        illness,
        doctorName,
        treatmentName,
        startDate,
        endDate,
        address,
        contactNumber,
        emergencyContact
    } = patient;

    return (
        <div style={{ backgroundColor: "#f5f5f5", padding: "20px", minHeight: "100vh" }}>
            <center>
                <h2>Patient Details</h2>
                <div className="card" style={{ maxWidth: "600px", margin: "20px auto", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
                    <div className="card-body" style={{ padding: "20px" }}>
                        <p className="card-text"><strong>Name:</strong> {firstName}</p>
                        <p className="card-text"><strong>Age:</strong> {age}</p>
                        <p className="card-text"><strong>Gender:</strong> {gender}</p>
                        <p className="card-text"><strong>Illness:</strong> {illness}</p>
                        <p className="card-text"><strong>Treatment:</strong> {treatmentName}</p>
                        <p className="card-text"><strong>Status:</strong> {status}</p>
                        <p className="card-text"><strong>Doctor Name:</strong> {doctorName}</p>
                        <p className="card-text"><strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()}</p>
                        {endDate && <p className="card-text"><strong>End Date:</strong> {new Date(endDate).toLocaleDateString()}</p>}
                        <p className="card-text"><strong>Address:</strong> {address}</p>
                        <p className="card-text"><strong>Contact Number:</strong> {contactNumber}</p>
                    </div>
                    <div className="card-body" style={{ padding: "20px" }}>
                        <h4>Emergency Contact Details</h4>
                        {emergencyContact ? (
                            <>
                                <p className="card-text"><strong>Name:</strong> {emergencyContact.name}</p>
                                <p className="card-text"><strong>Phone:</strong> {emergencyContact.phone}</p>
                                <p className="card-text"><strong>Email:</strong> {emergencyContact.email}</p>
                                <p className="card-text"><strong>Relation:</strong> {emergencyContact.relation}</p>
                            </>
                        ) : (
                            <p>No emergency contact information available.</p>
                        )}
                    </div>
                    <div className="card-body" style={{ textAlign: "center", padding: "20px" }}>
                        <Link to={`/patient/${id}`} className="btn btn-warning" style={{ marginRight: "10px" }}>Update</Link>
                        <button className="btn btn-danger" onClick={deletePatient}>Delete</button>
                    </div>
                </div>
            </center>
            <br />
            <center>
                <Link to="/patients">
                    <button className="btn btn-dark">Back</button>
                </Link>
            </center>
            <br />
        </div>
    );
}

export default GetPatient;
