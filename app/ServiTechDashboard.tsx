'use client';

import React, { useState } from 'react';
import { 
  X, Mail, Phone, MessageCircle, Plus, MoreVertical, 
  MapPin, AlertCircle, Menu, LogOut, Settings, HelpCircle,
  TrendingUp, Users, CheckCircle, Clock
} from 'lucide-react';

// ============================================
// POPUP DE CONTATO
// ============================================
interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const contactInfo = {
    name: 'Alexandre Cassoma',
    email: 'cassomaa927@gmail.com',
    phone: '+244 932 945 913',
    whatsapp: '244932945913',
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da ServiTech Angola.');
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${contactInfo.email}?subject=Solicitação de Informações - ServiTech Angola`;
  };

  const handleCall = () => {
    window.location.href = `tel:${contactInfo.phone}`;
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-8 relative rounded-t-2xl">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-white mb-2">Entre em Contato</h2>
            <p className="text-blue-100">Fale conosco para mais informações</p>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">{contactInfo.name}</h3>
              <p className="text-gray-500 text-sm">ServiTech Angola</p>
            </div>

            {/* WhatsApp */}
            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-between bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-4"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="text-green-600" size={24} />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">WhatsApp</p>
                  <p className="text-sm text-gray-600">{contactInfo.phone}</p>
                </div>
              </div>
              <span className="text-green-600 font-semibold">→</span>
            </button>

            {/* Email */}
            <button
              onClick={handleEmail}
              className="w-full flex items-center justify-between bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-4"
            >
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={24} />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-sm text-gray-600">{contactInfo.email}</p>
                </div>
              </div>
              <span className="text-blue-600 font-semibold">→</span>
            </button>

            {/* Phone */}
            <button
              onClick={handleCall}
              className="w-full flex items-center justify-between bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg p-4"
            >
              <div className="flex items-center gap-3">
                <Phone className="text-purple-600" size={24} />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Telefone</p>
                  <p className="text-sm text-gray-600">{contactInfo.phone}</p>
                </div>
              </div>
              <span className="text-purple-600 font-semibold">→</span>
            </button>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">Disponível 24/7</p>
            </div>
          </div>

          <div className="px-6 pb-6">
            <button
              onClick={onClose}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// ============================================
// DASHBOARD PRINCIPAL
// ============================================
export default function ServiTechDashboard() {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleContact = () => {
    setShowContactPopup(true);
  };

  const handleNewOrder = () => {
    alert('Funcionalidade: Criar Nova Ordem\n\nEm produção, isto abriria um formulário.');
    handleContact();
  };

  const handleOrders = () => {
    alert('Funcionalidade: Visualizar Ordens de Serviço\n\nEm produção, redirecionaria para a página de ordens.');
    handleContact();
  };

  const handleTechnicians = () => {
    alert('Funcionalidade: Gerenciar Técnicos\n\nEm produção, redirecionaria para a página de técnicos.');
    handleContact();
  };

  const handleSchedule = () => {
    alert('Funcionalidade: Ver Agenda\n\nEm produção, redirecionaria para a agenda.');
    handleContact();
  };

  const handleReports = () => {
    alert('Funcionalidade: Visualizar Relatórios\n\nEm produção, redirecionaria para relatórios.');
    handleContact();
  };

  const handleSettings = () => {
    alert('Funcionalidade: Configurações\n\nEm produção, abriria as configurações do sistema.');
    handleContact();
  };

  const handleHelp = () => {
    alert('Funcionalidade: Ajuda e Suporte\n\nAbrindo formulário de contato...');
    handleContact();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ============ NAVBAR ============ */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">ST</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">ServiTech Angola</h1>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <button onClick={handleOrders} className="text-gray-600 hover:text-gray-900 font-medium">
                Ordens
              </button>
              <button onClick={handleTechnicians} className="text-gray-600 hover:text-gray-900 font-medium">
                Técnicos
              </button>
              <button onClick={handleSchedule} className="text-gray-600 hover:text-gray-900 font-medium">
                Agenda
              </button>
              <button onClick={handleReports} className="text-gray-600 hover:text-gray-900 font-medium">
                Relatórios
              </button>
              <button onClick={handleHelp} className="text-gray-600 hover:text-gray-900 font-medium">
                Ajuda
              </button>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={handleContact}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg hidden sm:block"
              >
                Contactar
              </button>
              <button 
                onClick={() => setShowMenu(!showMenu)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-2">
            <button onClick={handleOrders} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Ordens de Serviço
            </button>
            <button onClick={handleTechnicians} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Técnicos
            </button>
            <button onClick={handleSchedule} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Agenda
            </button>
            <button onClick={handleReports} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Relatórios
            </button>
            <button onClick={handleHelp} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Ajuda
            </button>
            <button onClick={handleSettings} className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded">
              Configurações
            </button>
            <button onClick={handleContact} className="block w-full text-left px-4 py-2 bg-blue-600 text-white rounded">
              Contactar
            </button>
          </div>
        )}
      </nav>

      {/* ============ MAIN CONTENT ============ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
            <p className="text-gray-600">Visão geral das operações de serviço de campo</p>
          </div>
          <button
            onClick={handleNewOrder}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2"
          >
            <Plus size={20} />
            Nova Ordem
          </button>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Receita Mensal', value: '12 450 000 Kz', icon: TrendingUp, color: 'blue' },
            { label: 'Ordens Concluídas', value: '156', icon: CheckCircle, color: 'green' },
            { label: 'Técnicos Activos', value: '12', icon: Users, color: 'purple' },
            { label: 'Tempo Médio', value: '2.4h', icon: Clock, color: 'orange' },
          ].map((metric, idx) => {
            const Icon = metric.icon;
            const colors = {
              blue: 'bg-blue-50 border-blue-200',
              green: 'bg-green-50 border-green-200',
              purple: 'bg-purple-50 border-purple-200',
              orange: 'bg-orange-50 border-orange-200',
            };
            return (
              <div key={idx} className={`${colors[metric.color as keyof typeof colors]} border rounded-xl p-6`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{metric.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</p>
                  </div>
                  <Icon className={`text-${metric.color}-600`} size={24} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex items-start gap-4 mb-8">
          <AlertCircle className="text-blue-600 mt-1" size={24} />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">Precisa de Ajuda?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Entre em contato conosco para suporte, dúvidas ou solicitações de novos serviços. Disponível 24/7!
            </p>
            <button
              onClick={handleContact}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Contactar Agora
            </button>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">Ordens de Serviço</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Ordem</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Cliente</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Técnico</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Valor</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { order: 'OS-001', client: 'Sonangol EP', tech: 'João Sebastião', status: 'Em Curso', value: '185 000 Kz' },
                  { order: 'OS-002', client: 'ENDE', tech: 'Maria Santos', status: 'Pendente', value: '320 000 Kz' },
                  { order: 'OS-003', client: 'BAI', tech: 'António Ferreira', status: 'Concluído', value: '275 000 Kz' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.order}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.client}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{row.tech}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        row.status === 'Concluído' ? 'bg-green-100 text-green-800' :
                        row.status === 'Em Curso' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-gray-200">
            <button 
              onClick={handleOrders}
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
            >
              Ver todas as ordens →
            </button>
          </div>
        </div>
      </main>

      {/* ============ CONTACT POPUP ============ */}
      <ContactPopup 
        isOpen={showContactPopup}
        onClose={() => setShowContactPopup(false)}
      />
    </div>
  );
          }
    
