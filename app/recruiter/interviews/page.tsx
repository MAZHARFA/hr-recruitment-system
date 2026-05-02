"use client";
import React, { useState, useEffect } from 'react';

interface Interview {
  id: string;
  candidateName: string;
  clientName: string;
  dateTime: string;
}

const App: React.FC = () => {
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ candidateName: '', clientName: '', dateTime: '' });

 

  const fetchData = async () => {
    const res = await fetch(`api/recruiter/interview`);
    setInterviews(await res.json());
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`api/recruiter/interview`), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    };
    setForm({ candidateName: '', clientName: '', dateTime: '' });
    fetchData();
  };

  const handleDelete = async (id: string) => {
    await fetch(`${`api/recruiter/interview`}/${id}`, { method: 'DELETE' });
    fetchData();
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Recruiter Portal</h1>
        <p>Manage and schedule client interviews seamlessly.</p>
      </header>

      <section style={styles.formCard}>
        <form onSubmit={handleAdd} style={styles.form}>
          <input 
            style={styles.input} 
            placeholder="Candidate Name" 
            required
            value={form.candidateName}
            onChange={e => setForm({...form, candidateName: e.target.value})}
          />
          <input 
            style={styles.input} 
            placeholder="Client Name" 
            required
            value={form.clientName}
            onChange={e => setForm({...form, clientName: e.target.value})}
          />
          <input 
            style={styles.input} 
            type="datetime-local" 
            required
            value={form.dateTime}
            onChange={e => setForm({...form, dateTime: e.target.value})}
          />
          <button type="submit" style={styles.submitBtn}>Schedule Session</button>
        </form>
      </section>

      <main>
        {loading ? <p>Loading interviews...</p> : (
          <div style={styles.list}>
            {interviews.map(item => (
              <div key={item.id} style={styles.card}>
                <div>
                  <h4 style={{margin: 0}}>{item.candidateName}</h4>
                  <small style={{color: '#666'}}>{item.clientName} • {new Date(item.dateTime).toLocaleString()}</small>
                </div>
                <button onClick={() => handleDelete(item.id)} style={styles.deleteBtn}>Cancel</button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: { maxWidth: '700px', margin: '40px auto', fontFamily: 'system-ui, sans-serif', padding: '0 20px' },
  header: { textAlign: 'center', marginBottom: '40px' },
  formCard: { background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', marginBottom: '30px' },
  form: { display: 'flex', flexDirection: 'column', gap: '12px' },
  input: { padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '1rem' },
  submitBtn: { padding: '12px', background: '#007AFF', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 },
  list: { display: 'flex', flexDirection: 'column', gap: '12px' },
  card: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', border: '1px solid #eee', borderRadius: '8px', background: '#fdfdfd' },
  deleteBtn: { background: '#fff5f5', color: '#ff4d4f', border: '1px solid #ffccc7', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }
};

export default App;