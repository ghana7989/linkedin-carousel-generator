import { Body, Controller, Post, Res } from '@nestjs/common';
import { type Response } from 'express';
import { GenerateCarouselService } from './generate-carousel.service';

@Controller('tools')
export class ToolsController {
  constructor(
    private readonly generateCarouselService: GenerateCarouselService,
  ) {}

  @Post('generate-pdf')
  async generatePdf(@Body('html') html: string, @Res() res: Response) {
    if (!html) {
      return res.status(400).send('HTML content is required');
    }

    try {
      const pdfBuffer = await this.generateCarouselService.generatePdf(html);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader(
        'Content-Disposition',
        'attachment; filename=generated.pdf',
      );
      res.setHeader('Content-Length', pdfBuffer.length);

      res.end(pdfBuffer);
    } catch (error) {
      console.error('Error generating PDF:', error);
      res.status(500).send(`Error generating PDF: ${error.message}`);
    }
  }
}
