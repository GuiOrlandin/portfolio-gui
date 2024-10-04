interface linkedinDataResponse {
  firstName: string;
  lastName: string;
  profilePicture: string;
  summary: string;
  headline: string;
  educations: [{ schoolName: string; degree?: string; fieldOfStudy: string }];
  certifications: [
    {
      name: string;
      authority: string;
    }
  ];
  fullPositions: [
    {
      companyName: string;
      title: string;
      description: string;
    }
  ];

  multiLocaleHeadline: { pt: string };
  projects: {
    items: [{ title: string; description: string }];
  };
}

export const linkedinData = async (): Promise<linkedinDataResponse> => {
  let response = await fetch(
    "https://li-data-scraper.p.rapidapi.com/get-profile-data-by-url?url=https://www.linkedin.com/in/guilherme-orlandin",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "li-data-scraper.p.rapidapi.com",
        "x-rapidapi-key": "be211cf800mshe0c6f5187f0d545p1ff966jsn11f1c8647ae8",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch LinkedIn profile data");
  }

  const data = await response.json();

  return data;
};
