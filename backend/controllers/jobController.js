import express from "express";
import Job from "../models/Job.js";

const createJob = async (req, res) => {
  const { title, description } = req.body;
  const job = new Job({ title, description });

  await job.save();
  res.send("Job created successfully");
};

const getJobs = async (req, res) => {
  const jobs = await Job.find();
  return res.status(200).send(jobs);
};

export { createJob, getJobs };
