import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

// builtin middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/send-mail", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    //
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sainathb308@gmail.com",
        // pass: "lgey ehnk kpoo vcsb", //gmail generated password
        pass: "lgey ehnk ddwe dasdfa", //gmail generated password
      },
    });

    const mailOptions = {
      from: "sainathb308@gmail.com",
      to: "shivarajb308@gmail.com",
      subject: `New Message from ${name}`,
      html: `<h3> New message from sainath's portfolio </h3>
      <p><strong>Name: </strong>${name}</p>
      <p><strong>Email: </strong>${email}</p>
      <p><strong>Message: </strong>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log(`Server Running On Port:3000`);
});
