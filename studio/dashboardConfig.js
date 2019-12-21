export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dfda74dc739e9a57e41e252',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-w4i25trg',
                  apiId: '07c82d67-4d54-439e-bc1e-cc606ecf291e'
                },
                {
                  buildHookId: '5dfda74de9ce8431c72ae233',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6sgg2m8d',
                  apiId: '4d6a50ad-52e9-411e-b860-3c1214effd05'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Monichre/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6sgg2m8d.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
