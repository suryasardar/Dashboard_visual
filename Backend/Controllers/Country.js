import express from "express";
import Data from "../Models/Datamodel.js";

const Country = async (req, res) => {
    try {
        const { country, sector, start_year, end_year, intensity, topic, region, relevance, likelihood } = req.query;
        const query = {};

        if (country) {
            query.country = country;
        }
        if (sector) {
            query.sector = sector;
        }
        if (start_year) {
            query.start_year = start_year;
        }
        if (end_year) {
            query.end_year = end_year;
        }
        if (intensity) {
            query.intensity = intensity;
        }
        if (topic) {
            query.topic = topic;
        }
        if (region) {
            query.region = region;
        }
        if (relevance) {
            query.relevance = relevance;
        }
        if (likelihood) {
            query.likelihood = likelihood;
        }

        console.log(query, "ok");
        const data = await Data.find(query, { _id: 0 });
        res.json({ data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};

export default Country;
