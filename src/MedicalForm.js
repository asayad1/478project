import React, { useState } from 'react';
import './MedicalFormStyles.css'; // Adjust the path as necessary


function MedicalForm() {
    // States for each form field
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [allergy, setAllergy] = useState('');
    const [surgery, setSurgery] = useState('');
    const [medication, setMedication] = useState('');
    const [emergencyContact, setEmergencyContact] = useState('');
    const [insuranceProvider, setInsuranceProvider] = useState('');
    const [employer, setEmployer] = useState('');
    const [occupation, setOccupation] = useState('');
    const [signature, setSignature] = useState('');
    const [medicalCondition, setMedicalCondition] = useState('');
    const [ssn, setSsn] = useState('');

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        // Here you can process and send the form data to a server or API
        console.log({
            name,
            address,
            phone,
            email,
            dob,
            bloodType,
            allergy,
            surgery,
            medication,
            emergencyContact,
            insuranceProvider,
            employer,
            occupation,
            signature,
            medicalCondition,
            ssn
        });
    }

    return (
        <form onSubmit={handleSubmit}  className="medical-form">
            {/* Input fields for each form data */}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} placeholder="Date of Birth" />
            <input type="text" value={bloodType} onChange={(e) => setBloodType(e.target.value)} placeholder="Blood Type" />
            <input type="text" value={allergy} onChange={(e) => setAllergy(e.target.value)} placeholder="Allergies" />
            <input type="text" value={surgery} onChange={(e) => setSurgery(e.target.value)} placeholder="Surgeries" />
            <input type="text" value={medication} onChange={(e) => setMedication(e.target.value)} placeholder="Medications" />
            <input type="text" value={emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)} placeholder="Emergency Contact" />
            <input type="text" value={insuranceProvider} onChange={(e) => setInsuranceProvider(e.target.value)} placeholder="Insurance Provider" />
            <input type="text" value={employer} onChange={(e) => setEmployer(e.target.value)} placeholder="Employer" />
            <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} placeholder="Occupation" />
            <input type="text" value={signature} onChange={(e) => setSignature(e.target.value)} placeholder="Signature" />
            <textarea value={medicalCondition} onChange={(e) => setMedicalCondition(e.target.value)} placeholder="Medical Condition" />
            <input type="text" value={ssn} onChange={(e) => setSsn(e.target.value)} placeholder="Social Security Number" />

            <button type="submit">Submit</button>
        </form>
    );
}

export default MedicalForm;
