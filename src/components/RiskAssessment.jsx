import React, { useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';
import { LendAndLoanContext } from '../context/LendAndLoanContext';
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  Activity,
  RefreshCcw 
} from 'lucide-react';


import  RISK_ASSESSMENT_ABI from '../utils/riskassessment.json';

const RiskAssessment = () => {
  const { account, provider } = useContext(LendAndLoanContext);

  // State variables
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userProfile, setUserProfile] = useState(null);
  const [riskAssessment, setRiskAssessment] = useState(null);
  const [formData, setFormData] = useState({
    loanAmount: '',
    collateralAmount: ''
  });

  // Contract address - Replace with your deployed contract address
  const RISK_ASSESSMENT_ADDRESS = "0xE5883D231dA72f1B66C0c54903E19194609C4514";

  // Initialize contract
  const getRiskContract = () => {
    if (!provider) return null;
    return new ethers.Contract(RISK_ASSESSMENT_ADDRESS, RISK_ASSESSMENT_ABI, provider);
  };

  // Load user profile
  useEffect(() => {
    const loadUserProfile = async () => {
      if (!account || !provider) return;
      
      try {
        setLoading(true);
        const contract = getRiskContract();
        const profile = await contract.userProfiles(account);
        
        setUserProfile({
          creditScore: profile.creditScore.toNumber(),
          totalLoans: profile.totalLoans.toNumber(),
          successfulRepayments: profile.successfulRepayments.toNumber(),
          totalVolumeBorrowed: ethers.utils.formatEther(profile.totalVolumeBorrowed),
          isActive: profile.isActive,
          hasDefaulted: profile.hasDefaulted
        });
      } catch (err) {
        console.error('Error loading profile:', err);
        setError('Failed to load user profile');
      } finally {
        setLoading(false);
      }
    };

    loadUserProfile();
  }, [account, provider]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Assess loan risk
  const handleRiskAssessment = async () => {
    if (!account || !formData.loanAmount || !formData.collateralAmount) return;

    try {
      setLoading(true);
      setError('');
      const contract = getRiskContract();
      
      const risk = await contract.assessLoanRisk(
        account,
        ethers.utils.parseEther(formData.loanAmount),
        ethers.utils.parseEther(formData.collateralAmount)
      );

      setRiskAssessment({
        riskScore: risk.riskScore.toNumber(),
        recommendedRate: (risk.recommendedRate.toNumber() / 100).toFixed(2),
        maxLoanAmount: ethers.utils.formatEther(risk.maxLoanAmount),
        minimumCollateral: ethers.utils.formatEther(risk.minimumCollateral),
        isEligible: risk.isEligible,
        riskLevel: ['Low', 'Moderate', 'High', 'Severe'][risk.riskLevel]
      });
    } catch (err) {
      console.error('Error assessing risk:', err);
      setError('Failed to assess loan risk');
    } finally {
      setLoading(false);
    }
  };

  // Get risk level color
  const getRiskColor = (level) => {
    const colors = {
      Low: 'text-green-400',
      Moderate: 'text-yellow-400',
      High: 'text-orange-400',
      Severe: 'text-red-400'
    };
    return colors[level] || 'text-white';
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Credit Profile Section */}
      {userProfile && (
        <div className="bg-[#22437c] rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center">
            <Shield className="w-6 h-6 mr-2 text-[#3272e2]" />
            Credit Profile
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1a3366] rounded-lg p-4">
              <div className="text-gray-300 mb-2">Credit Score</div>
              <div className="text-2xl font-bold text-white">
                {userProfile.creditScore}
              </div>
            </div>

            <div className="bg-[#1a3366] rounded-lg p-4">
              <div className="text-gray-300 mb-2">Total Loans</div>
              <div className="text-2xl font-bold text-white">
                {userProfile.totalLoans}
              </div>
            </div>

            <div className="bg-[#1a3366] rounded-lg p-4">
              <div className="text-gray-300 mb-2">Successful Repayments</div>
              <div className="text-2xl font-bold text-green-400">
                {userProfile.successfulRepayments}
              </div>
            </div>

            <div className="bg-[#1a3366] rounded-lg p-4">
              <div className="text-gray-300 mb-2">Total Volume</div>
              <div className="text-2xl font-bold text-white">
                {userProfile.totalVolumeBorrowed} cBTC
              </div>
            </div>
          </div>

          {userProfile.hasDefaulted && (
            <div className="mt-4 p-4 bg-red-900/30 rounded-lg flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-400">Previous defaults detected</span>
            </div>
          )}
        </div>
      )}

      {/* Risk Assessment Form */}
      <div className="bg-[#22437c] rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center">
          <Activity className="w-6 h-6 mr-2 text-[#3272e2]" />
          Risk Assessment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 mb-2">Loan Amount (cBTC)</label>
            <input
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleInputChange}
              className="w-full bg-[#1a3366] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3272e2]"
              placeholder="Enter loan amount"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Collateral Amount (wETH)</label>
            <input
              type="number"
              name="collateralAmount"
              value={formData.collateralAmount}
              onChange={handleInputChange}
              className="w-full bg-[#1a3366] text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#3272e2]"
              placeholder="Enter collateral amount"
            />
          </div>
        </div>

        {error && (
          <div className="mt-4 p-4 bg-red-900/30 rounded-lg">
            <span className="text-red-400">{error}</span>
          </div>
        )}

        <button
          onClick={handleRiskAssessment}
          disabled={loading || !formData.loanAmount || !formData.collateralAmount}
          className="mt-6 w-full py-3 bg-[#3272e2] text-white rounded-lg hover:bg-[#2861c9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {loading ? (
            <>
              <RefreshCcw className="w-5 h-5 animate-spin mr-2" />
              Assessing Risk...
            </>
          ) : (
            'Assess Risk'
          )}
        </button>

        {/* Risk Assessment Results */}
        {riskAssessment && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1a3366] rounded-lg p-4">
              <div className="text-gray-300 mb-2">Risk Level</div>
              <div className={`text-2xl font-bold ${getRiskColor(riskAssessment.riskLevel)}`}>
                {riskAssessment.riskLevel}
              </div>
            </div>

            <div className="bg-[#1a3366] rounded-lg p-4">
              <div className="text-gray-300 mb-2">Recommended Rate</div>
              <div className="text-2xl font-bold text-white">
                {riskAssessment.recommendedRate}%
              </div>
            </div>

            <div className="bg-[#1a3366] rounded-lg p-4">
              <div className="text-gray-300 mb-2">Max Loan Amount</div>
              <div className="text-2xl font-bold text-white">
                {riskAssessment.maxLoanAmount} cBTC
              </div>
            </div>

            <div className="bg-[#1a3366] rounded-lg p-4">
              <div className="text-gray-300 mb-2">Min Collateral</div>
              <div className="text-2xl font-bold text-white">
                {riskAssessment.minimumCollateral} wETH
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RiskAssessment;