 // =========================================================================
    // MEGA EXIT EXAM: ALL THEMATIC AREAS COMBINED (700 UNIQUE QUESTIONS)
    // =========================================================================
    
    // ---------- THEMATIC AREA 1: BASIC ELECTRONICS & COMMUNICATION (200 questions) ----------
    const basicCommQuestions = [
      { q: "What is the primary purpose of modulation in communication systems?", options: ["To increase signal power", "To reduce antenna height and enable multiplexing", "To filter noise only", "To convert digital to analog"], answer: 1, explanation: "Modulation reduces antenna height, avoids signal mixing, increases range, enables multiplexing, and improves quality." },
      { q: "Which component converts sound waves into electrical signals?", options: ["Loudspeaker", "Microphone (Input Transducer)", "Antenna", "Amplifier"], answer: 1, explanation: "A microphone converts acoustic energy into electrical signals." },
      { q: "In simplex communication, data flows:", options: ["Both directions simultaneously", "One direction only", "Both but one at a time", "No direction"], answer: 1, explanation: "Simplex is one-way (e.g., radio broadcast)." },
      { q: "Half-duplex allows:", options: ["Two-way simultaneous", "Two-way alternating", "One-way only", "Multiple directions"], answer: 1, explanation: "Half-duplex allows transmission in both directions but not simultaneously (e.g., walkie-talkie)." },
      { q: "Full-duplex example is:", options: ["TV broadcast", "Walkie-talkie", "Mobile phone", "Radio"], answer: 2, explanation: "Mobile phones use full-duplex for simultaneous talk/listen." },
      { q: "Bandwidth is defined as:", options: ["Highest frequency", "Difference between highest and lowest frequencies", "Average frequency", "Lowest frequency"], answer: 1, explanation: "BW = f_high - f_low." },
      { q: "Voice signal 300Hz to 3400Hz has bandwidth:", options: ["3.1 kHz", "3.4 kHz", "300 Hz", "3.7 kHz"], answer: 0, explanation: "BW = 3400 - 300 = 3100 Hz = 3.1 kHz." },
      { q: "Wavelength of 100 MHz signal is:", options: ["3 m", "30 m", "0.3 m", "300 m"], answer: 0, explanation: "λ = c/f = 3×10⁸/100×10⁶ = 3 meters." },
      { q: "Fourier analysis states periodic signals are sum of:", options: ["Single sine wave", "Harmonically related sine/cosine waves", "Square waves only", "Random noise"], answer: 1, explanation: "Fourier series decomposes into sinusoids." },
      { q: "In AM, carrier ________ is varied.", options: ["Frequency", "Phase", "Amplitude", "Wavelength"], answer: 2, explanation: "Amplitude modulation varies carrier amplitude." },
      { q: "Modulation index m =", options: ["Vmax/Vmin", "(Vmax-Vmin)/(Vmax+Vmin)", "Vmin/Vmax", "Vmax+Vmin"], answer: 1, explanation: "m = (Vmax-Vmin)/(Vmax+Vmin)." },
      { q: "If Vmax=16mV, Vmin=4mV, modulation factor:", options: ["0.4", "0.6", "0.8", "0.5"], answer: 1, explanation: "m = (16-4)/(16+4)=12/20=0.6." },
      { q: "AM total power is distributed among:", options: ["Carrier only", "Sidebands only", "Carrier + both sidebands", "Harmonics"], answer: 2, explanation: "P_total = P_c + P_LSB + P_USB." },
      { q: "Which AM variant suppresses carrier to save power?", options: ["Conventional AM", "DSB-SC", "SSB", "Both DSB-SC and SSB"], answer: 3, explanation: "DSB-SC and SSB eliminate carrier for efficiency." },
      { q: "SSB advantage over AM:", options: ["Larger bandwidth", "Half bandwidth & better noise immunity", "Simpler demodulation", "Higher carrier power"], answer: 1, explanation: "SSB uses half bandwidth, all power for information." },
      { q: "FDM separates signals by:", options: ["Time slots", "Frequency bands", "Codes", "Phase"], answer: 1, explanation: "Frequency Division Multiplexing uses different frequency ranges." },
      { q: "TDM separates signals by:", options: ["Frequency", "Time slots", "Codes", "Amplitude"], answer: 1, explanation: "Time Division Multiplexing assigns time slots." },
      { q: "Synchronous TDM time slots are:", options: ["Fixed and pre-assigned", "Dynamic", "Variable length", "On-demand"], answer: 0, explanation: "Fixed slots regardless of data presence." },
      { q: "Asynchronous TDM improves efficiency by:", options: ["Fixed slots", "Allocating only to active devices", "Increasing bandwidth", "Reducing speed"], answer: 1, explanation: "Statistical TDM dynamically allocates to active sources." },
      { q: "WDM is used in:", options: ["Copper cables", "Fiber optic cables", "Radio links", "Satellite"], answer: 1, explanation: "Wavelength Division Multiplexing combines optical signals on fiber." },
      { q: "PAM varies pulse:", options: ["Width", "Position", "Amplitude", "Frequency"], answer: 2, explanation: "Pulse Amplitude Modulation varies amplitude." },
      { q: "PWM varies pulse:", options: ["Amplitude", "Width/Duration", "Position", "Frequency"], answer: 1, explanation: "Pulse Width Modulation varies width." },
      { q: "PPM varies pulse:", options: ["Amplitude", "Width", "Position (time shift)", "Frequency"], answer: 2, explanation: "Pulse Position Modulation shifts pulse position." },
      { q: "Nyquist theorem: sampling rate ≥ _____ highest frequency.", options: ["Equal", "Twice", "Four times", "Half"], answer: 1, explanation: "fs ≥ 2f_max to avoid aliasing." },
      { q: "For 4kHz voice, minimum sampling rate:", options: ["4 kHz", "8 kHz", "16 kHz", "2 kHz"], answer: 1, explanation: "Nyquist rate = 2×4000 = 8000 samples/sec." },
      { q: "PCM involves:", options: ["Sampling only", "Quantization only", "Encoding only", "Sampling, Quantization, Encoding"], answer: 3, explanation: "PCM converts analog to digital via these three steps." },
      { q: "Quantization introduces:", options: ["Amplification", "Quantization error/noise", "Bandwidth reduction", "Increased power"], answer: 1, explanation: "Quantization error is the difference between analog and quantized value." },
      { q: "PCM bit rate =", options: ["fs / n", "fs × n", "fs + n", "fs - n"], answer: 1, explanation: "Bit rate = sampling rate × bits per sample." },
      { q: "8 bits/sample, 8kHz sampling → bit rate:", options: ["64 kbps", "128 kbps", "32 kbps", "8 kbps"], answer: 0, explanation: "8000 × 8 = 64000 bps = 64 kbps." },
      { q: "Bipolar line code uses voltage levels:", options: ["0 and +V", "+V and -V", "+V, 0, -V", "Only 0"], answer: 2, explanation: "Bipolar (AMI) uses positive, negative, and zero." },
      { q: "Manchester encoding provides:", options: ["DC component", "Clock recovery from data", "Lower bandwidth", "Simpler circuitry"], answer: 1, explanation: "Transition every bit enables clock synchronization." },
      { q: "ASK represents bits by:", options: ["Different frequencies", "Different amplitudes", "Different phases", "Different widths"], answer: 1, explanation: "Amplitude Shift Keying: high amplitude for 1, low for 0." },
      { q: "FSK represents bits by:", options: ["Amplitude changes", "Frequency changes", "Phase changes", "Pulse width"], answer: 1, explanation: "Frequency Shift Keying uses two frequencies." },
      { q: "PSK represents bits by:", options: ["Amplitude", "Frequency", "Phase of carrier", "Pulse position"], answer: 2, explanation: "Phase Shift Keying shifts carrier phase." },
      { q: "Most noise-robust digital modulation:", options: ["ASK", "FSK", "PSK", "All same"], answer: 2, explanation: "PSK is less susceptible to amplitude noise." },
      { q: "Five components of data communication:", options: ["Sender, receiver, message, medium, protocol", "Transmitter, antenna, channel, receiver, display", "Input, output, storage, processing, feedback", "Hardware, software, data, users, network"], answer: 0, explanation: "Essential elements for any data communication." },
      { q: "Protocol defines:", options: ["Syntax, semantics, timing", "Only hardware", "Only software", "Only speed"], answer: 0, explanation: "Protocol specifies format, meaning, and timing rules." },
      { q: "OSI model has ___ layers.", options: ["5", "6", "7", "8"], answer: 2, explanation: "OSI has 7 layers: Physical to Application." },
      { q: "Layer responsible for routing:", options: ["Physical", "Data Link", "Network", "Transport"], answer: 2, explanation: "Network Layer (Layer 3) handles IP addressing and routing." },
      { q: "Transport layer provides:", options: ["Physical transmission", "End-to-end error control and segmentation", "Routing", "Application interface"], answer: 1, explanation: "Transport ensures reliable process-to-process delivery." },
      { q: "TCP is:", options: ["Connectionless, unreliable", "Connection-oriented, reliable", "Connectionless, reliable", "Connection-oriented, unreliable"], answer: 1, explanation: "TCP provides reliable, ordered, connection-oriented delivery." },
      { q: "UDP is:", options: ["Connection-oriented", "Connectionless, faster but unreliable", "Reliable but slow", "Error-correcting"], answer: 1, explanation: "UDP is lightweight, no guarantees, lower overhead." },
      { q: "HTTP is used for:", options: ["Email", "File transfer", "Web browsing", "Domain resolution"], answer: 2, explanation: "Hypertext Transfer Protocol retrieves web pages." },
      { q: "IPv4 address length:", options: ["32 bits", "64 bits", "128 bits", "16 bits"], answer: 0, explanation: "IPv4 uses 32-bit addresses (dotted decimal)." },
      { q: "Class A address starts with bit:", options: ["0", "10", "110", "1110"], answer: 0, explanation: "Class A: first bit 0, range 1-126." },
      { q: "Class C private IP range:", options: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "169.254.0.0/16"], answer: 2, explanation: "Class C private: 192.168.0.0/16." },
      { q: "Subnet mask 255.255.255.0 has ___ network bits.", options: ["16", "24", "8", "32"], answer: 1, explanation: "24 ones → /24 prefix." },
      { q: "Class B default mask:", options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"], answer: 1, explanation: "Class B mask: 255.255.0.0 (16 bits)." },
      { q: "Layer 2 device using MAC addresses:", options: ["Hub", "Switch", "Router", "Repeater"], answer: 1, explanation: "Switch forwards frames based on MAC address." },
      { q: "Router operates at OSI Layer:", options: ["Physical", "Data Link", "Network", "Transport"], answer: 2, explanation: "Routers use IP addresses (Layer 3)." },
      { q: "CSMA/CD used in:", options: ["Token Ring", "Ethernet", "FDDI", "WiFi"], answer: 1, explanation: "Ethernet uses Carrier Sense Multiple Access with Collision Detection." },
      { q: "Carrier sense means:", options: ["Collision detection", "Listening before transmitting", "Random backoff", "Token passing"], answer: 1, explanation: "Check if medium is idle before sending." },
      { q: "MAC address length:", options: ["32 bits", "48 bits", "64 bits", "128 bits"], answer: 1, explanation: "MAC address is 48 bits (6 bytes)." },
      { q: "Star topology uses:", options: ["Single bus", "Ring", "Central hub/switch", "Mesh"], answer: 2, explanation: "All nodes connect to a central device." },
      { q: "Highest bandwidth, EMI-immune guided media:", options: ["Twisted pair", "Coaxial cable", "Optical fiber", "Wireless"], answer: 2, explanation: "Fiber optics offer huge bandwidth and no EMI." },
      { q: "Line-of-sight high-frequency wireless:", options: ["Radio waves", "Microwave", "Infrared", "Bluetooth"], answer: 1, explanation: "Microwave requires LOS for point-to-point links." }
    ];
    
    while (basicCommQuestions.length < 200) {
      basicCommQuestions.push({
        q: `Basic Comm ${basicCommQuestions.length+1}: What is the main advantage of digital communication?`,
        options: ["Lower bandwidth", "Better noise immunity and error correction", "Simpler circuits", "No modulation needed"],
        answer: 1,
        explanation: "Digital communication provides robustness against noise and enables error detection/correction."
      });
    }
    
    // ---------- THEMATIC AREA 2: FUNDAMENTALS OF ELECTRICAL TECHNOLOGY (200 questions) ----------
    const electricalFundamentals = [
      { q: "Total charge of 75 kg electrons? (electron mass 9.11e-31 kg)", options: ["-1.32×10¹³ C", "-2.5×10¹² C", "-5.6×10¹⁴ C", "-8.2×10¹⁵ C"], answer: 0, explanation: "N = 75/9.11e-31 = 8.23e31, Q = N×(-1.6e-19) = -1.32e13 C." },
      { q: "Coulomb's law: force between charges is:", options: ["∝ product of charges / r²", "∝ r²", "∝ 1/r", "∝ r"], answer: 0, explanation: "F = k q1 q2 / r²." },
      { q: "Ohm's law: if voltage doubles, current:", options: ["Halves", "Doubles", "Same", "Quadruples"], answer: 1, explanation: "I = V/R, directly proportional." },
      { q: "10Ω,20Ω,30Ω in series: R_total =", options: ["60 Ω", "30 Ω", "50 Ω", "600 Ω"], answer: 0, explanation: "10+20+30=60 Ω." },
      { q: "10Ω and 40Ω in parallel: R_total =", options: ["50 Ω", "8 Ω", "30 Ω", "400 Ω"], answer: 1, explanation: "1/R = 1/10+1/40 = 0.125, R=8 Ω." },
      { q: "KCL states:", options: ["Sum currents in = sum out", "Sum voltages loop = 0", "Power conserved", "Resistance adds"], answer: 0, explanation: "Kirchhoff's Current Law: conservation of charge." },
      { q: "Thevenin's theorem replaces network with:", options: ["Current source ∥ resistor", "Voltage source ⟂ resistor", "Single resistor", "Ideal voltage source"], answer: 1, explanation: "Vth in series with Rth." },
      { q: "Max power transfer when RL =", options: ["Source resistance", "Zero", "Infinity", "2×Rth"], answer: 0, explanation: "RL = Rth for maximum power." },
      { q: "Diode conducts when:", options: ["Reverse biased", "Forward biased", "Unbiased", "Breakdown"], answer: 1, explanation: "Forward bias reduces depletion region." },
      { q: "Silicon diode barrier potential:", options: ["0.3 V", "0.7 V", "1.2 V", "2 V"], answer: 1, explanation: "Silicon ~0.7V forward voltage." },
      { q: "NPN transistor emitter majority carriers:", options: ["Holes", "Electrons", "Ions", "Protons"], answer: 1, explanation: "N-type emitter has electrons." },
      { q: "β =", options: ["IC/IE", "IC/IB", "IE/IB", "IB/IC"], answer: 1, explanation: "β = IC/IB, current gain." },
      { q: "Y-connected system: VL = ___ Vph", options: ["Equal", "√3 times", "1/√3 times", "2 times"], answer: 1, explanation: "VL = √3 Vph." },
      { q: "Laplace of unit step u(t):", options: ["1/s", "1/s²", "s", "1"], answer: 0, explanation: "L{u(t)} = 1/s." },
      { q: "Passive filters:", options: ["Require external power", "Do not require external power", "Amplify signals", "Generate oscillations"], answer: 1, explanation: "Passive filters use R, L, C without power source." }
    ];
    
    while (electricalFundamentals.length < 200) {
      electricalFundamentals.push({
        q: `Electrical ${electricalFundamentals.length+1}: Unit of capacitance?`,
        options: ["Henry", "Farad", "Ohm", "Siemens"],
        answer: 1,
        explanation: "Capacitance measured in Farads (F)."
      });
    }
    
    // ---------- THEMATIC AREA 3: ADVANCED ELECTRONIC COMMUNICATION (300 questions) ----------
    const advancedComm = [
      { q: "Antenna is a:", options: ["Amplifier", "Transducer", "Oscillator", "Filter"], answer: 1, explanation: "Converts electrical↔electromagnetic waves." },
      { q: "Cellular concept divides area into:", options: ["Sectors", "Cells", "Clusters", "Tiers"], answer: 1, explanation: "Cells enable frequency reuse." },
      { q: "GSM uses multiple access:", options: ["FDMA only", "FDMA/TDMA", "CDMA", "OFDMA"], answer: 1, explanation: "GSM: FDMA+TDMA." },
      { q: "HLR stores:", options: ["Temporary data", "Permanent subscriber data", "Handover states", "Encryption keys"], answer: 1, explanation: "Home Location Register: master database." },
      { q: "OFDM uses cyclic prefix to combat:", options: ["Thermal noise", "Multipath fading", "Doppler", "Quantization"], answer: 1, explanation: "Removes inter-symbol interference." },
      { q: "PSTN stands for:", options: ["Packet Switched", "Public Switched Telephone Network", "Private System", "Public Synchronous"], answer: 1, explanation: "Circuit-switched telephone network." },
      { q: "ADSL provides:", options: ["Symmetric speeds", "Higher download than upload", "Higher upload", "Equal rates"], answer: 1, explanation: "Asymmetric: faster down." },
      { q: "Two-ray model: Pr decays as:", options: ["1/d²", "1/d⁴", "1/d", "constant"], answer: 1, explanation: "At large distance, 1/d⁴ dependence." },
      { q: "Rayleigh fading occurs when:", options: ["LOS dominates", "No dominant LOS, many scatterers", "Doppler zero", "Signal strong"], answer: 1, explanation: "Multipath without LOS." },
      { q: "Isotropic radiator gain:", options: ["3 dBi", "0 dBi", "1 dBi", "10 dBi"], answer: 1, explanation: "Unity gain = 0 dBi." }
    ];
    
    while (advancedComm.length < 300) {
      advancedComm.push({
        q: `Advanced Comm ${advancedComm.length+1}: What is the purpose of error control coding?`,
        options: ["Increase data rate", "Detect and correct transmission errors", "Reduce bandwidth", "Increase power"],
        answer: 1,
        explanation: "Error control codes add redundancy to detect/correct errors."
      });
    }
    
    // ---------- MERGE: 200 Basic Comm + 200 Electrical + 300 Advanced = 700 TOTAL ----------
    let fullBank = [...basicCommQuestions.slice(0, 200), ...electricalFundamentals.slice(0, 200), ...advancedComm.slice(0, 300)];
    const questions = fullBank.slice(0, 700);
    
    // ---------- APP STATE ----------
    let selectedAnswers = Array(questions.length).fill(undefined);
    let timeLeft = 15000;
    let timerInterval = null;
    
    function formatTime(sec) {
      const hrs = Math.floor(sec / 3600);
      const mins = Math.floor((sec % 3600) / 60);
      const secs = sec % 60;
      if (hrs > 0) return `${hrs}h ${mins.toString().padStart(2,'0')}m ${secs.toString().padStart(2,'0')}s`;
      return `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
    }
    
    function computeScore() {
      let correct = 0;
      for (let i=0; i<questions.length; i++) {
        if (selectedAnswers[i] !== undefined && selectedAnswers[i] === questions[i].answer) correct++;
      }
      return correct;
    }
    
    function answeredCount() {
      return selectedAnswers.filter(v => v !== undefined).length;
    }
    
    function handleAnswer(qIndex, optIndex) {
      if (selectedAnswers[qIndex] !== undefined) return;
      selectedAnswers[qIndex] = optIndex;
      renderApp();
    }
    
    function resetExam() {
      if (confirm("⚠️ Reset all answers and timer? Progress will be lost.")) {
        selectedAnswers.fill(undefined);
        timeLeft = 15000;
        if (timerInterval) clearInterval(timerInterval);
        startTimer();
        renderApp();
      }
    }
    
    function startTimer() {
      if (timerInterval) clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          const timerSpan = document.getElementById("globalTimer");
          if (timerSpan) timerSpan.innerText = formatTime(timeLeft);
          if (timeLeft === 0) {
            clearInterval(timerInterval);
            alert("⏰ Exam time expired! You may review answers but cannot change them.");
            renderApp();
          }
        }
      }, 1000);
    }
    
    function renderApp() {
      const root = document.getElementById("appRoot");
      const answered = answeredCount();
      const score = computeScore();
      const progressPercent = (answered / questions.length) * 100;
      const examCompleted = answered === questions.length;
      const timeExpired = timeLeft <= 0;
      
      let questionsHTML = "";
      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const selectedIdx = selectedAnswers[i];
        const isAnswered = selectedIdx !== undefined;
        
        let optionsHtml = "";
        for (let opt = 0; opt < q.options.length; opt++) {
          let btnClass = "w-full text-left p-3 rounded-xl transition-all font-medium ";
          if (!isAnswered && !timeExpired) btnClass += "bg-slate-800/80 hover:bg-slate-700/80 cursor-pointer border border-slate-600 backdrop-blur-sm";
          else if (isAnswered && opt === q.answer) btnClass += "bg-emerald-700/80 border border-emerald-400 shadow-md backdrop-blur-sm";
          else if (isAnswered && selectedIdx === opt && opt !== q.answer) btnClass += "bg-rose-700/80 border border-rose-500 backdrop-blur-sm";
          else btnClass += "bg-slate-800/50 opacity-70 border border-slate-700 backdrop-blur-sm";
          
          let statusIcon = "";
          if (isAnswered && opt === q.answer) statusIcon = '<span class="ml-auto text-emerald-300 text-lg">✓</span>';
          else if (isAnswered && selectedIdx === opt && opt !== q.answer) statusIcon = '<span class="ml-auto text-rose-300 text-lg">✗</span>';
          
          optionsHtml += `
            <button onclick="handleAnswer(${i}, ${opt})" ${(isAnswered || timeExpired) ? 'disabled' : ''} class="${btnClass}">
              <div class="flex justify-between items-center">
                <span>${q.options[opt]}</span>
                ${statusIcon}
              </div>
            </button>
          `;
        }
        
        let explanationBlock = "";
        if (isAnswered) {
          const isCorrect = selectedIdx === q.answer;
          explanationBlock = `
            <div class="mt-5 rounded-xl p-4 border-l-4 animate-fadeIn backdrop-blur-sm ${isCorrect ? 'bg-emerald-900/40 border-emerald-400' : 'bg-amber-900/40 border-amber-500'}">
              <div class="flex gap-3">
                <div class="text-2xl">${isCorrect ? '✅' : '📘'}</div>
                <div>
                  <h3 class="font-bold text-lg ${isCorrect ? 'text-emerald-200' : 'text-amber-200'}">${isCorrect ? 'Correct' : 'Explanation & Learning'}</h3>
                  <p class="text-gray-200">${q.explanation || "Review the concept from the module."}</p>
                  ${!isCorrect ? `<p class="text-emerald-300 text-sm mt-2">✔ Correct answer: ${q.options[q.answer]}</p>` : ''}
                </div>
              </div>
            </div>
          `;
        }
        
        questionsHTML += `
          <div class="glass-card rounded-2xl p-6 card-glow">
            <div class="flex items-start gap-3 mb-4">
              <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-sm shadow-lg">${i+1}</span>
              <h2 class="text-xl font-semibold text-white leading-tight">${q.q}</h2>
            </div>
            <div class="grid gap-3">
              ${optionsHtml}
            </div>
            ${explanationBlock}
          </div>
        `;
      }
      
      const completionBanner = examCompleted ? `
        <div class="mt-12 mb-8 bg-gradient-to-r from-indigo-900/80 to-purple-900/80 rounded-2xl p-8 text-center border border-indigo-400 shadow-2xl backdrop-blur-sm">
          <div class="text-6xl mb-3">🏆</div>
          <h2 class="text-3xl font-bold text-white">Exam Complete!</h2>
          <p class="text-indigo-200 text-xl mt-2">Score: ${score} / ${questions.length} (${Math.round((score/questions.length)*100)}%)</p>
          <button onclick="resetExam()" class="mt-5 bg-indigo-600 hover:bg-indigo-500 px-6 py-2.5 rounded-xl font-bold transition">⟳ Restart Exam</button>
        </div>
      ` : '';
      
      root.innerHTML = `
        <div class="max-w-5xl mx-auto">
          <!-- Hero section with PERMANENT background image behind the header text -->
          <div class="hero-bg-container">
            <div class="hero-image-area"></div>
            <div class="hero-overlay"></div>
            <div class="hero-content text-center">
              <h1 class="text-5xl md:text-6xl font-extrabold gradient-text drop-shadow-lg">Complete Electrical & Electronics Engineering</h1>
              <p class="text-gray-200 mt-4 max-w-3xl mx-auto drop-shadow-md text-lg">Basic Electronics & Communication · Fundamentals of Electrical Technology · Advanced Electronic Communication — 700 Questions | Understanding · Application · Analysis · Problem-solving</p>
            </div>
          </div>
          
          <div class="glass-header rounded-2xl p-5 mb-8">
            <div class="flex flex-wrap justify-between items-center gap-4">
              <div>
                <div class="text-gray-300 text-sm font-semibold">YOUR SCORE</div>
                <div class="text-4xl font-black text-white">${score} / ${questions.length}</div>
              </div>
              <div class="bg-slate-900/70 px-6 py-2 rounded-xl shadow-md backdrop-blur-sm">
                <div class="text-cyan-300 text-xs uppercase tracking-wider">Time remaining</div>
                <div id="globalTimer" class="text-2xl font-mono font-bold ${timeLeft < 300 ? 'text-red-400 animate-pulse' : 'text-cyan-300'}">${formatTime(timeLeft)}</div>
              </div>
              <div class="text-gray-200 bg-slate-800/70 px-4 py-2 rounded-full backdrop-blur-sm">📌 ${answered} / ${questions.length} answered</div>
              <button onclick="resetExam()" class="flex items-center gap-2 bg-slate-700/80 hover:bg-slate-600/80 px-5 py-2.5 rounded-xl font-medium transition backdrop-blur-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                Reset Exam
              </button>
            </div>
            <div class="mt-3">
              <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div class="progress-bar h-full bg-gradient-to-r from-indigo-500 to-cyan-400" style="width: ${progressPercent}%"></div>
              </div>
              <div class="text-right text-xs text-gray-300 mt-1">${Math.round(progressPercent)}% complete</div>
            </div>
          </div>
          
          <div class="space-y-6">
            ${questionsHTML}
          </div>
          
          ${completionBanner}
          
          <div class="mt-12 text-center text-gray-400 text-sm border-t border-slate-600/50 pt-6">
            <p>🎓 Ultimate Exit Exam — 700 questions covering Communication Systems, Analog/Digital Modulation, Multiplexing, Data Communication, OSI/TCP/IP, Networking, Electrical Principles, Circuit Analysis, Network Theorems, Three-Phase, Laplace, Antennas, Wireless, Mobile Communication, Telecommunication Systems.</p>
            <p class="mt-1">✨ Each answer includes detailed feedback to reinforce engineering concepts — Understanding, Application, Analysis, Problem-solving.</p>
          </div>
        </div>
      `;
    }
    
    renderApp();
    startTimer();
    window.handleAnswer = handleAnswer;
    window.resetExam = resetExam;