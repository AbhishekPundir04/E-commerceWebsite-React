import classes from "./ContactUs.module.css";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const phone = event.target.elements.phone.value;

    try {
      const response = await fetch(
        "https://new-1-70ad2-default-rtdb.firebaseio.com/Credental.json",
        {
          method: "POST",
          body: JSON.stringify({ name, email, phone }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to submit form");
    }
  };

  return (
    <div className={classes.div}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label>Name</label>
        <input className={classes.name} type="text" name="name" />
        <label>Email</label>
        <input className={classes.name} type="email" name="email" />
        <label>Phone Number</label>
        <input className={classes.name} type="tel" name="phone" />
        <button className={classes.btn} type="submit">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default Contact;
