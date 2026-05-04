import axios from 'axios';

const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';

/**
 * AI Service for MOUJ
 * Supports the following models:
 * - qwen3.5:cloud (Primary Advisor)
 * - deepseek-r1:8b (Reasoning)
 * - qwen3.5:9b (General)
 * - gemma:7b (Sentiment)
 * - gemma4:E4B (Fraud)
 * - gemma4:E2B (Quick Tasks)
 */
class AIService {
  static async generateResponse(prompt: string, model: string = 'qwen3.5:9b'): Promise<string> {
    try {
      const response = await axios.post(`${OLLAMA_BASE_URL}/api/generate`, {
        model: model,
        prompt: prompt,
        stream: false
      });
      return response.data.response;
    } catch (error: any) {
      console.error(`AI Error (${model}):`, error.message);
      throw new Error('AI service currently unavailable');
    }
  }

  static async analyzeRisk(financialData: any): Promise<string> {
    const prompt = `Analyze the following financial data for risk and credit scoring: ${JSON.stringify(financialData)}`;
    return this.generateResponse(prompt, 'deepseek-r1:8b');
  }

  static async detectFraud(transactionData: any): Promise<string> {
    const prompt = `Check for anomalies or fraud in this transaction: ${JSON.stringify(transactionData)}`;
    return this.generateResponse(prompt, 'gemma4:E4B');
  }

  static async getFinancialAdvice(userQuery: string, userProfile: any): Promise<string> {
    const prompt = `As a financial advisor for a Moroccan fintech user, advise on: ${userQuery}. Context: ${JSON.stringify(userProfile)}`;
    return this.generateResponse(prompt, 'qwen3.5:cloud');
  }
}

export default AIService;
