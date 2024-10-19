import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './CreateOffenseRecord.css'; // CSS for styling the page

const CreateOffenseRecord = () => {
    const [dateViolated, setDateViolated] = useState('');
    const [ticketNo, setTicketNo] = useState('');
    const [officerID, setOfficerID] = useState('');
    const [officerName, setOfficerName] = useState('');
    const [driver, setDriver] = useState('');
    const [status, setStatus] = useState('Pending');
    const [offense, setOffense] = useState('');
    const [offenseList, setOffenseList] = useState([]);
    const [totalFine, setTotalFine] = useState(0);
    const [remarks, setRemarks] = useState('');

    const handleAddOffense = () => {
        const newOffense = { code: offense, fine: 50 }; // Replace with dynamic fine if needed
        setOffenseList([...offenseList, newOffense]);
        setTotalFine(totalFine + newOffense.fine);
        setOffense('');
    };

    const handleSave = async () => {
        const offenseRecord = {
            dateViolated,
            ticketNo,
            officerID,
            officerName,
            driver,
            status,
            offenses: offenseList,
            totalFine,
            remarks,
        };

        try {
            const response = await axios.post('http://localhost:5000/offense-record', offenseRecord);
            console.log('Offense Record Saved:', response.data);
            alert('Offense record saved successfully!');
            handleCancel(); // Reset form after save
        } catch (error) {
            console.error('Error saving offense record:', error);
            alert('Failed to save offense record. Please try again.');
        }
    };

    const handleCancel = () => {
        setDateViolated('');
        setTicketNo('');
        setOfficerID('');
        setOfficerName('');
        setDriver('');
        setStatus('Pending');
        setOffense('');
        setOffenseList([]);
        setTotalFine(0);
        setRemarks('');
    };

    return (
        <div className="offense-record-container">
            <h2>Create New Offense Record</h2>

            <div className="form-group">
                <label>Date Violated</label>
                <input
                    type="datetime-local"
                    value={dateViolated}
                    onChange={(e) => setDateViolated(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Ticket No.</label>
                <input
                    type="text"
                    value={ticketNo}
                    onChange={(e) => setTicketNo(e.target.value)}
                    placeholder="Enter ticket number"
                />
            </div>

            <div className="form-group">
                <label>Officer ID</label>
                <input
                    type="text"
                    value={officerID}
                    onChange={(e) => setOfficerID(e.target.value)}
                    placeholder="Enter officer ID"
                />
            </div>

            <div className="form-group">
                <label>Officer Name</label>
                <input
                    type="text"
                    value={officerName}
                    onChange={(e) => setOfficerName(e.target.value)}
                    placeholder="Enter officer name"
                />
            </div>

            <div className="form-group">
                <label>Driver</label>
                <input
                    type="text"
                    value={driver}
                    onChange={(e) => setDriver(e.target.value)}
                    placeholder="Enter driver name"
                />
            </div>

            <div className="form-group">
                <label>Status</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Pending">Pending</option>
                    <option value="Resolved">Resolved</option>
                </select>
            </div>

            <div className="offense-list-section">
                <h3>Offense List</h3>
                <div className="form-group">
                    <label>Offense</label>
                    <input
                        type="text"
                        value={offense}
                        onChange={(e) => setOffense(e.target.value)}
                        placeholder="Enter offense"
                    />
                    <button onClick={handleAddOffense} className="add-btn">+ Add to List</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Fine</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offenseList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.code}</td>
                                <td>{item.fine}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            const newList = offenseList.filter((_, i) => i !== index);
                                            setOffenseList(newList);
                                            setTotalFine(totalFine - item.fine);
                                        }}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {offenseList.length === 0 && (
                            <tr>
                                <td colSpan="3">No Offense Listed Yet.</td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Total</td>
                            <td>{totalFine}</td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div className="form-group">
                <label>Remarks</label>
                <textarea
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    placeholder="Enter remarks"
                    rows="3"
                />
            </div>

            <div className="form-actions">
                <button onClick={handleSave} className="save-btn">Save</button>
                <button onClick={handleCancel} className="cancel-btn">Cancel</button>
            </div>
        </div>
    );
};

export default CreateOffenseRecord;
