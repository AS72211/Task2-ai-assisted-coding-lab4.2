import express from 'express';
import {
  createEvaluation,
  getAllEvaluations,
  getEvaluation,
  getEvaluationSummary,
} from '../controllers/evaluationController.js';

const router = express.Router();

// Summary must be defined before /:id to avoid collision
router.get('/summary', getEvaluationSummary);
router.get('/', getAllEvaluations);
router.get('/:id', getEvaluation);
router.post('/', createEvaluation);

export default router;
