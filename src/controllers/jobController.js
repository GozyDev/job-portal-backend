// This would eventually be a DB call
const jobs = require('../data/jobs'); 

// Handler for getting the job list
exports.getAllJobs = (req, res) => {
    try {
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching jobs" });
    }
};

// Handler for getting a specific job detail
exports.getJobById = (req, res) => {
    const { id } = req.params;
    const job = jobs.find(j => j.id === id);

    if (!job) {
        return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json(job);
};