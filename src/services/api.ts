import axios from 'axios';

// Modificação para Vite (import.meta.env)
console.log('API URL:', import.meta.env.VITE_API_URL);
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const api = axios.create({
  //TODO: Olhar o warning
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  // Orçamentos
  createBudget: async (data: BudgetData) => {
    try {
      const response = await api.post('/api/budgets', data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.error || 'Erro ao enviar orçamento');
      }
      throw new Error('Erro desconhecido ao enviar orçamento');
    }
  },

  // Produtos
  getProducts: async () => {
    try {
      const response = await api.get('/api/products');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.error || 'Erro ao carregar produtos');
      }
      throw new Error('Erro desconhecido ao carregar produtos');
    }
  },

  // Serviços
  getServices: async () => {
    try {
      const response = await api.get('/api/services');
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.error || 'Erro ao carregar serviços');
      }
      throw new Error('Erro desconhecido ao carregar serviços');
    }
  },
};

// Tipos (mantenha os mesmos tipos que já existiam)
interface BudgetData {
  nome: string;
  email: string;
  telefone: string;
  nomeEmpresa: string;
  sedeEmpresa: string;
  equipamento: string;
  data: string;
  mensagem?: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image?: string;
}

export interface Service {
  id: number;
  name: string;
  price: number;
  description: string;
  duration?: string;
}