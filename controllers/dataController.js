const processData = (req, res) => {
    try {
        const data = req.body.data || [];

        if (!Array.isArray(data)) {
            return res.status(400).json({ is_success: false, message: "Invalid input format, 'data' should be a list" });
        }

        const numbers = [];
        const alphabets = [];
        let highestLowercase = '';

        data.forEach(item => {
            if (!isNaN(item) && item !== '') {  // Check for numbers including integers and floats
                numbers.push(item);
                console.log(`Added to numbers: ${item}`);
            } else if (/^[a-zA-Z]$/.test(item)) {  // Check for single character alphabets
                alphabets.push(item);
                console.log(`Added to alphabets: ${item}`);
                if (item === item.toLowerCase() && item > highestLowercase) {
                    highestLowercase = item;
                    console.log(`Updated highest lowercase alphabet: ${highestLowercase}`);
                }
            }
        });

        const response = {
            is_success: true,
            user_id: "john_doe_17091999",  // Replace with dynamic logic if needed
            email: "john@xyz.com",  // Replace with your actual email
            roll_number: "ABCD123",  // Replace with your actual roll number
            numbers: numbers,
            alphabets: alphabets,
            highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
        };

        return res.status(200).json(response);

    } catch (error) {
        console.error('Error processing data:', error.message);
        return res.status(500).json({ is_success: false, message: error.message });
    }
};

const getOperationCode = (req, res) => {
    res.status(200).json({ operation_code: 1 });
};

module.exports = {
    processData,
    getOperationCode
};
