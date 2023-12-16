export default function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Inital Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(ev) =>
              onChangeInput("initialInvestment", ev.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(ev) =>
              onChangeInput("annualInvestment", ev.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(ev) => onChangeInput("expectedReturn", ev.target.value)}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(ev) => onChangeInput("duration", ev.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
