const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from current directory
app.use(express.static(__dirname));

// Database file path
const DB_FILE = path.join(__dirname, 'appointments.json');

// Initialize database file if it doesn't exist
if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify([]));
}

// API endpoint to handle booking
app.post('/api/book', (req, res) => {
    const { name, phone, service, date } = req.body;

    // Server-side validation
    if (!name || !phone || !service || !date) {
        return res.status(400).json({ success: false, message: 'Please fill all fields properly.' });
    }

    try {
        // Read existing data
        const data = fs.readFileSync(DB_FILE, 'utf8');
        const appointments = JSON.parse(data);

        // Create new appointment record
        const newAppointment = {
            id: Date.now(),
            name,
            phone,
            service,
            date,
            status: 'Pending',
            createdAt: new Date().toISOString()
        };

        // Save to database
        appointments.push(newAppointment);
        fs.writeFileSync(DB_FILE, JSON.stringify(appointments, null, 2));

        // Send success response
        console.log(`[New Booking] ${name} booked for ${service} on ${date}`);
        res.status(200).json({ 
            success: true, 
            message: 'Appointment confirmed successfully!',
            appointmentId: newAppointment.id
        });

    } catch (error) {
        console.error('Database Error:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log('=============================================');
    console.log('🚀 Backend Server is Running!');
    console.log(`🌐 Live at: http://localhost:${PORT}`);
    console.log('📁 Database: appointments.json');
    console.log('=============================================');
});
