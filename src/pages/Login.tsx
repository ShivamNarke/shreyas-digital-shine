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
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

// --- Define props ---
interface LoginProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSwitchToSignup: () => void; // Function to call when "Sign up" is clicked
}

// Pass props to the component
const Login: React.FC<LoginProps> = ({ open, onOpenChange, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // We no longer need the local 'open' state, it's controlled by props.

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_id: email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        login(data.token, data.user);
        toast({ title: 'Login successful', description: 'Welcome back!' });
        onOpenChange(false); // <-- Close the modal on success using the prop
        navigate('/');
      } else {
        toast({ title: 'Login failed', description: data.message, variant: 'destructive' });
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
          <DialogTitle className="text-white">Login</DialogTitle>
          <DialogDescription>Sign in to your account</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ... (Email and Password inputs - no changes here) ... */}
          <div>
            <Label htmlFor="email-modal" className="text-gray-300">Email</Label>
            <Input
              id="email-modal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <Label htmlFor="password-modal" className="text-gray-300">Password</Label>
            <Input
              id="password-modal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 text-white"
              placeholder="••••••••"
            />
          </div>
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            {/* --- Call the onSwitchToSignup prop --- */}
            <Button
              variant="link"
              className="text-blue-400 hover:underline p-0 h-auto"
              onClick={onSwitchToSignup} // <-- This now switches to the signup modal
            >
              Sign up
            </Button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Login;