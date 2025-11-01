import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

// --- Define props ---
interface SignupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToLogin: () => void; // Function to call when "Login" is clicked
}

// Pass props to the component
const Signup: React.FC<SignupProps> = ({ open, onOpenChange, onSwitchToLogin }) => {
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // We no longer need the local 'open' state, it's controlled by props.

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile_no: mobile, email_id: email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        toast({ title: 'Signup successful', description: 'Please wait for verification.' });
        onOpenChange(false); // <-- Close the modal on success
        onSwitchToLogin(); // <-- Automatically open the login modal
      } else {
        toast({ title: 'Signup failed', description: data.message, variant: 'destructive' });
      }
    } catch (error) {
      toast({ title: 'Error', description: 'Something went wrong. Please try again.', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    // --- Use props to control the Dialog ---
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-[#1a1a2e] border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-white">Sign Up</DialogTitle>
          <DialogDescription>Create your account</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ... (Mobile, Email, Password inputs - no changes here) ... */}
          <div>
            <Label htmlFor="mobile-modal" className="text-gray-300">Mobile Number</Label>
            <Input
              id="mobile-modal"
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="9876543210"
            />
          </div>
          <div>
            <Label htmlFor="email-modal-signup" className="text-gray-300">Email</Label>
            <Input
              id="email-modal-signup"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <Label htmlFor="password-modal-signup" className="text-gray-300">Password</Label>
            <Input
              id="password-modal-signup"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="••••••••"
            />
          </div>
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" disabled={loading}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            {/* --- Call the onSwitchToLogin prop --- */}
            <Button
              variant="link"
              className="text-blue-400 hover:underline p-0 h-auto"
              onClick={onSwitchToLogin} // <-- This now switches to the login modal
            >
              Login
            </Button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Signup;