const typographyTheme = () => {
  return {
    config: {
      minLock: 320,
      maxLock: 1440,
    },
    primary: {
      family: '"Montserrat Alternates", sans-serif',
      h1: {
        fontSize: { mobile: 38, tablet: 49, laptop: 56 },
        lineHeight: { mobile: 41, tablet: 52, laptop: 60 },
      },
      h2: {
        fontSize: { mobile: 32, tablet: 32, laptop: 48 },
        lineHeight: { mobile: 34, tablet: 35, laptop: 52 },
      },
      h3: {
        fontSize: { mobile: 22, tablet: 31, laptop: 40 },
        lineHeight: { mobile: 24, tablet: 34, laptop: 46 },
      },
      h4: {
        fontSize: { mobile: 20, tablet: 24, laptop: 34 },
        lineHeight: { mobile: 23, tablet: 30, laptop: 38 },
      },
      h5: {
        fontSize: { mobile: 16, tablet: 18, laptop: 28 },
        lineHeight: { mobile: 19, tablet: 21, laptop: 32 },
      },
    },
    secondary: {
      family: '"Ropa Sans", sans-serif',
      h2: {
        fontSize: { mobile: 28, tablet: 32, laptop: 48 },
        lineHeight: { mobile: 30, tablet: 35, laptop: 52 },
      },

      body: {
        fontSize: { mobile: 18, tablet: 22, laptop: 26 },
        lineHeight: { mobile: 22, tablet: 23, laptop: 27 },
      },
      small: {
        fontSize: { mobile: 20, tablet: 10, laptop: 13 },
        lineHeight: { mobile: 24, tablet: 13, laptop: 15 },
      },
      // caption: a title or brief explanation appended to an illustration, cartoon, or poster.
      caption: {},
      // eyebrow: Eyebrow text is a descriptive keyword or phrase placed above the main headline and blurb.
      // it can be h2, h3 and so on...
      eyebrow: {},
    },
  }
}

export default typographyTheme
