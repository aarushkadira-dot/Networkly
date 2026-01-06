import { useState, useEffect } from 'react';
import { Modal } from './Modal';
import { Input } from './Input';
import { Button } from './Button';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';

interface OnboardingModalProps {
  isOpen: boolean;
  onComplete: () => void;
}

const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'prefer-not-to-say', label: 'Prefer not to say' },
  { value: 'other', label: 'Other' },
];

const GRADE_OPTIONS = [
  { value: '9', label: '9th Grade' },
  { value: '10', label: '10th Grade' },
  { value: '11', label: '11th Grade' },
  { value: '12', label: '12th Grade' },
];

export function OnboardingModal({ isOpen, onComplete }: OnboardingModalProps) {
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    age: '',
    gender: '',
    school: '',
    grade_level: '',
    location: '',
    bio: '',
    interests: [] as string[],
  });
  const [newInterest, setNewInterest] = useState('');

  useEffect(() => {
    if (isOpen && user) {
      // Load existing profile data if available
      loadProfile();
    }
  }, [isOpen, user]);

  const loadProfile = async () => {
    if (!user) return;
    
    const { data } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle();

    if (data) {
      setFormData({
        full_name: data.full_name || '',
        age: data.age?.toString() || '',
        gender: data.gender || '',
        school: data.school || '',
        grade_level: data.grade_level || '',
        location: data.location || '',
        bio: data.bio || '',
        interests: data.interests || [],
      });
    }
  };

  const addInterest = () => {
    if (newInterest.trim() && !formData.interests.includes(newInterest.trim())) {
      setFormData({
        ...formData,
        interests: [...formData.interests, newInterest.trim()],
      });
      setNewInterest('');
    }
  };

  const removeInterest = (index: number) => {
    setFormData({
      ...formData,
      interests: formData.interests.filter((_, i) => i !== index),
    });
  };

  const handleNext = () => {
    if (step === 1) {
      // Validate step 1
      if (!formData.full_name || !formData.age || !formData.gender || !formData.school || !formData.grade_level) {
        return;
      }
    }
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (!user) return;
    setLoading(true);

    const { error } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        email: user.email!,
        full_name: formData.full_name,
        age: parseInt(formData.age),
        gender: formData.gender,
        school: formData.school,
        grade_level: formData.grade_level,
        location: formData.location,
        bio: formData.bio,
        interests: formData.interests,
        onboarding_completed: true,
      });

    if (error) {
      console.error('Error saving profile:', error);
      setLoading(false);
      return;
    }

    setLoading(false);
    onComplete();
  };

  const isStepValid = () => {
    if (step === 1) {
      return formData.full_name && formData.age && formData.gender && formData.school && formData.grade_level;
    }
    return true;
  };

  return (
    <Modal isOpen={isOpen} onClose={() => {}} title={`Welcome to Networkly! (Step ${step}/3)`} showCloseButton={false}>
      <div className="space-y-6">
        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-electric-blue h-2 rounded-full"
            initial={{ width: `${((step - 1) / 3) * 100}%` }}
            animate={{ width: `${((step - 1) / 3) * 100}%` }}
            transition={{ duration: 0.3 }}
            style={{ width: `${((step - 1) / 3) * 100}%` }}
          />
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-charcoal">Basic Information</h3>
              <Input
                label="Full Name"
                value={formData.full_name}
                onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                placeholder="Your full name"
                required
              />
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Age <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  min="13"
                  max="19"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder="Your age"
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                  required
                >
                  <option value="">Select gender</option>
                  {GENDER_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <Input
                label="High School"
                value={formData.school}
                onChange={(e) => setFormData({ ...formData, school: e.target.value })}
                placeholder="Your high school name"
                required
              />
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Grade Level <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.grade_level}
                  onChange={(e) => setFormData({ ...formData, grade_level: e.target.value })}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent"
                  required
                >
                  <option value="">Select grade</option>
                  {GRADE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <Input
                label="Location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="City, State"
              />
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-charcoal">Tell Us About Yourself</h3>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Bio
                </label>
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="Tell us about yourself, your goals, and what you're passionate about..."
                  rows={4}
                  className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg transition-all duration-200
                    focus:outline-none focus:ring-2 focus:ring-electric-blue focus:border-transparent resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1.5">
                  Interests
                </label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    placeholder="Add an interest (e.g., AI, Biology, Music)"
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addInterest())}
                  />
                  <Button onClick={addInterest} type="button">Add</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-electric-blue/10 text-electric-blue rounded-full text-sm"
                    >
                      {interest}
                      <button
                        onClick={() => removeInterest(index)}
                        className="hover:text-red-600"
                        type="button"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-charcoal">Review Your Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium">{formData.full_name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Age:</span>
                  <span className="font-medium">{formData.age}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Gender:</span>
                  <span className="font-medium">
                    {GENDER_OPTIONS.find((o) => o.value === formData.gender)?.label || formData.gender}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">School:</span>
                  <span className="font-medium">{formData.school}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Grade:</span>
                  <span className="font-medium">
                    {GRADE_OPTIONS.find((o) => o.value === formData.grade_level)?.label || formData.grade_level}
                  </span>
                </div>
                {formData.location && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{formData.location}</span>
                  </div>
                )}
                {formData.interests.length > 0 && (
                  <div>
                    <span className="text-gray-600">Interests:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {formData.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-electric-blue/10 text-electric-blue rounded text-xs"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                You can always update this information later in your profile settings.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between pt-4">
          {step > 1 ? (
            <Button variant="outline" onClick={() => setStep(step - 1)} disabled={loading}>
              Back
            </Button>
          ) : (
            <div />
          )}
          <Button
            onClick={handleNext}
            disabled={loading || !isStepValid()}
            className="ml-auto"
          >
            {loading ? 'Saving...' : step === 3 ? 'Complete Setup' : 'Next'}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
