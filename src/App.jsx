```jsx
import { useState } from "react";

export default function App() {
  const [spotsLeft] = useState(12);
  const [auditSpots] = useState(38);

  const testimonials = [
    {
      name: "Itay",
      title: "CXO Coach and Executive Growth Advisor",
      company: "Former Engineering Director",
      quote: "This framework helped me transition from technical manager to strategic leader in just 3 weeks. I went from explaining Jira metrics to shaping our product vision at the executive level."
    },
    {
      name: "Sarah K.",
      title: "Senior Engineering Manager",
      company: "TechCorp",
      quote: "I was stuck in execution mode for years. The Strategic Seat Readiness Audit revealed exactly where I was falling short. Now I'm invited to roadmap meetings and my influence has doubled."
    },
    {
      name: "Marcus T.",
      title: "Engineering Lead",
      company: "Innovate Labs",
      quote: "The 'Map the Spine' exercise alone was worth the investment. I finally understand how to navigate organizational politics and position myself as a strategic partner."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-red-400">Still Managing Jira?</span>
              <br />
              <span className="text-white">You're On the Layoff List</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
              If you're not in the room when strategy is shaped, you'll be the first out when budgets shrink. 
              53% of tech managers feel replaceable. Are you ready to become indispensable?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start the Free Audit Now
              </button>
              <button className="border border-slate-600 hover:border-white text-white font-bold text-lg px-12 py-4 rounded-lg transition-all duration-300 hover:bg-white/10">
                Get My Personalized Influence Review
              </button>
            </div>
            <p className="text-slate-400 text-sm">
              Only {auditSpots} audit spots left this week • 3-week framework • 200+ tech managers transformed
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">The Invisible Manager's Dilemma</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                    <h3 className="text-2xl font-bold text-red-400 mb-4">Career Plateau</h3>
                    <p className="text-slate-300">You ship features on time, but promotions go to others. You're stuck at senior level despite high performance. Advancement requires impact, not just output.</p>
                  </div>
                  <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                    <h3 className="text-2xl font-bold text-red-400 mb-4">Tech Anxiety</h3>
                    <p className="text-slate-300">Fear of obsolescence. Worried AI will replace you. Constant pressure to keep up with rapid technological change while being seen as just an executor.</p>
                  </div>
                  <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                    <h3 className="text-2xl font-bold text-red-400 mb-4">Feeling Replaceable</h3>
                    <p className="text-slate-300">53% of the American workforce feels replaceable. You're seen as overhead, not leadership. Your expertise is "mansplained" despite years of experience.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-700/30 p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold mb-6">Take the Strategic Seat Readiness Audit</h3>
                <p className="text-slate-300 mb-6">Discover your exact readiness level for strategic leadership with our outcome-based assessment.</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Brutally honest assessment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">No personality tests or vague advice</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Diagnosis + prescription (MVP-3)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Based on real leadership potential assessments</span>
                  </div>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all duration-300">
                  Take the Free Audit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">THE PUSH Framework</h2>
            <p className="text-2xl text-slate-300 mb-4">3 Weeks. 1 KPI. Career Rewritten.</p>
            <p className="text-xl text-slate-400">A tactical system to transform from operational manager to strategic leader</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-600 text-center hover:border-slate-500 transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
              <h3 className="text-2xl font-bold mb-4">Map the Spine</h3>
              <p className="text-slate-300">Understand organizational dynamics and build relationship capital. Navigate politics and identify key decision-makers who control your career trajectory.</p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-600 text-center hover:border-slate-500 transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
              <h3 className="text-2xl font-bold mb-4">Build Shared Cadence</h3>
              <p className="text-slate-300">Establish structured communication that builds trust and demonstrates reliability. Transform from reactive manager to proactive strategic partner.</p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-600 text-center hover:border-slate-500 transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
              <h3 className="text-2xl font-bold mb-4">Unblock the Team</h3>
              <p className="text-slate-300">Drive clarity and remove obstacles. Shift from managing tasks to enabling strategic outcomes that impact the business bottom line.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Your Success Metric: Strategic Seats per Manager</h2>
            <p className="text-xl text-slate-300 mb-12">
              We track what matters: the number of strategic discussions you're invited to in the next 30 days. 
              This single KPI predicts promotion velocity and demonstrates your transformation from executor to trusted advisor.
            </p>
            
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-red-400 mb-2">Before</div>
                  <div className="text-slate-300">Operational, reliable, overworked</div>
                  <div className="text-sm text-slate-400 mt-2">"Just managing Jira"</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">After</div>
                  <div className="text-slate-300">Strategic, trusted, promoted</div>
                  <div className="text-sm text-slate-400 mt-2">"Shaping product vision"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">They Transformed Their Careers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-600">
                <p className="text-slate-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.title}</div>
                    <div className="text-slate-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">You're Not Broken—You've Just Been Invisible</h2>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed">
              In 3 weeks, you'll either be seen differently—or stay in the same loop. 
              The next QBR could be your promotion meeting. The choice is yours.
            </p>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-600 mb-8">
              <h3 className="text-2xl font-bold mb-4">ROI Is Simple</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400">$15K+</div>
                  <div className="text-slate-300">Average salary increase after promotion</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400">3 Weeks</div>
                  <div className="text-slate-300">Time to transform your career trajectory</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">∞</div>
                  <div className="text-slate-300">Long-term career momentum and security</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                Start the Free Audit Now
              </button>
              <button className="border border-slate-600 hover:border-white text-white font-bold text-lg px-12 py-4 rounded-lg transition-all duration-300 hover:bg-white/10 w-full sm:w-auto">
                Book Your Strategy Call
              </button>
            </div>
            
            <p className="text-slate-400 text-sm">
              Only {spotsLeft} spots left for this month's activation cycle • Join 200+ tech managers who have already escaped the Jira trap
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 p-4 z-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white mb-4 sm:mb-0 sm:mr-8">
              <span className="text-red-400 font-bold">Only {spotsLeft} Audit Spots Remaining This Week</span> — Don't Get Left Behind!
            </p>
            <div className="flex gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-300">
                Start the Free Audit
              </button>
              <button className="border border-slate-600 hover:border-white text-white font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
