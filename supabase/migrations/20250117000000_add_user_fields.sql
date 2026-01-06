-- Add age and gender fields to profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS age integer CHECK (age >= 13 AND age <= 19),
ADD COLUMN IF NOT EXISTS gender text CHECK (gender IN ('male', 'female', 'non-binary', 'prefer-not-to-say', 'other')),
ADD COLUMN IF NOT EXISTS onboarding_completed boolean DEFAULT false;

-- Update existing profiles to mark onboarding as incomplete if they don't have required fields
UPDATE profiles 
SET onboarding_completed = false 
WHERE full_name IS NULL OR school IS NULL OR grade_level IS NULL OR age IS NULL;
