import ReservationForm from '../components/ReservationForm';
import { Calendar, Users, Clock, Info } from 'lucide-react';

export default function Reservations() {
  return (
    <main className="pt-32 pb-32 bg-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter mb-6">RESERVE A TABLE.</h1>
              <p className="text-paper/60 text-xl leading-relaxed">
                Join us for an unforgettable dining experience. We recommend booking at least 24 hours in advance for weekend dinners.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-brand shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Group Bookings</h4>
                  <p className="text-paper/60 text-sm">For parties of 8 or more, please contact us directly via phone or email for special arrangements.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-brand shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Dining Duration</h4>
                  <p className="text-paper/60 text-sm">Tables are reserved for 90 minutes for parties up to 4, and 120 minutes for larger groups.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-brand shrink-0">
                  <Info size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Cancellation Policy</h4>
                  <p className="text-paper/60 text-sm">Please let us know at least 4 hours in advance if you need to cancel or modify your booking.</p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border-brand/20">
              <h4 className="font-display font-bold text-xl mb-4 text-brand">PLANNING AN EVENT?</h4>
              <p className="text-paper/60 mb-6">We offer full restaurant buyouts and private catering for weddings, corporate events, and parties.</p>
              <button className="btn-outline w-full">Inquire About Catering</button>
            </div>
          </div>

          <div className="sticky top-32">
            <ReservationForm />
          </div>
        </div>
      </div>
    </main>
  );
}
