import PDFDocument from "pdfkit";
import { OWNER } from "../../../helpers/constants";
import { load as aboutLoad } from "../../about/+page";
import { load as projectLoad } from "../../projects/+page";

const { introduce, socials, stack, languages, educations, jobs } = aboutLoad();
const { projects } = projectLoad();

export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      const doc = new PDFDocument({ size: "A4", margins: { top: 40, left: 45, right: 45, bottom: 30 } });

      // Intro Section
      doc.font("Courier-Bold").fontSize(25).text(OWNER.toUpperCase());
      doc.font("Courier").fontSize(13);

      const preparedBio = introduce.join(" ").replaceAll(/\<(.*?)\>/g, "");

      doc.moveDown().text(preparedBio).moveDown();

      for (const social of Object.keys(socials) as (keyof typeof socials)[]) {
        const name = social[0].toUpperCase() + social.slice(1);

        doc.font("Courier-Oblique").text(`${name}: `, { continued: true });
        doc.font("Courier").fillColor("#ED4245").text(socials[social].url).fillColor("black");
      }

      // Background Education Section
      doc.moveDown(3);

      doc.font("Courier-Bold").fontSize(15).text("Backgroud Education".toUpperCase(), { align: "center" });
      doc.font("Courier").fontSize(13).moveDown();

      for (const education of educations) {
        doc.moveDown().text(education.name, { stroke: true, continued: true });
        doc.text(education.years, { align: "right", stroke: false });

        if (education?.apprentice) {
          doc.text(`The Apprentice - ${education.apprentice}`);
        }

        doc.moveDown().text(education.description, { stroke: false });
      }

      // Foreign Language Section
      doc.moveDown(3);

      doc.font("Courier-Bold").fontSize(15).text("Foreign Language".toUpperCase(), { align: "center" });
      doc.font("Courier").fontSize(13).moveDown();

      doc.list(languages.map((lang) => `${lang.name} - ${lang.grade}`));

      // My Stack Section
      doc.moveDown(3);

      doc.font("Courier-Bold").fontSize(15).text("My Stack".toUpperCase(), { align: "center" });
      doc.font("Courier").fontSize(13).moveDown();

      doc.text("Languages", { stroke: true }).moveDown();

      doc.list(stack.languages).moveDown();

      doc.text("Technologies", { stroke: true }).moveDown();

      Object.keys(stack.technologies).forEach((key) => {
        doc.text(key).list(stack.technologies[key]).moveDown();
      });

      // Work Experience Section
      doc.moveDown(3);

      doc.font("Courier-Bold").fontSize(15).text("Work Experience".toUpperCase(), { align: "center" });
      doc.font("Courier").fontSize(13).moveDown();

      for (const job of jobs) {
        doc.moveDown().text(job.name, { stroke: true, continued: true });

        doc.text(job.years, { stroke: false, align: "right" });
        doc.text(job.postion, { stroke: false, oblique: true });

        doc.moveDown().text(job.description);
      }

      // My Projects Section
      doc.moveDown(3);

      doc.font("Courier-Bold").fontSize(15).text("My Projects".toUpperCase(), { align: "center" });
      doc.font("Courier").fontSize(13).moveDown();

      for (const project of projects) {
        doc.moveDown().text(project.name, { stroke: true });

        doc.moveDown().text(project.description);

        doc.moveDown().list([project.stack.join(", ")]);
      }

      doc.on("data", (chunk) => controller.enqueue(chunk));

      doc.on("end", () => controller.close());

      doc.end();
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "application/pdf", "Content-Disposition": `inline; filename=${OWNER}.pdf` },
  });
}
