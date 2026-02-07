import { WorkExperience, contactLinks, projects, skillTableData } from './constants';

describe('portfolio content integrity', () => {
  test('includes projects with unique titles', () => {
    expect(projects.length).toBeGreaterThan(0);
    const titles = projects.map((project) => project.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  test('includes work experience entries with required fields', () => {
    expect(WorkExperience.length).toBeGreaterThan(0);
    WorkExperience.forEach((item) => {
      expect(item.title).toBeTruthy();
      expect(item.company).toBeTruthy();
      expect(item.date).toBeTruthy();
    });
  });

  test('includes skill categories and contact links', () => {
    expect(skillTableData.length).toBeGreaterThan(0);
    expect(contactLinks.github).toContain('github.com');
    expect(contactLinks.email.startsWith('mailto:')).toBe(true);
  });
});
