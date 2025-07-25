export interface Data {
  slug: string;
  id: number;
  title: string;
  description: string; 
  media: Medium[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
  
}

export interface ApiResponse {
  data: Data; 
}
