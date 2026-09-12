import planningParser from "../services/planning-parser.service.js";

export const upload = async (req, res) => {
  try {
    const result = await planningParser.parse(req.file.path);

    res.json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
};
