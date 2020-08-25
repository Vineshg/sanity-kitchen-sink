export default {
  widgets: [
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
                  buildHookId: '5f44d66843b941796d172f03',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-n1uqsmip',
                  apiId: '6d0b0cbc-377e-4f5c-80b3-e181b9edc4b1'
                },
                {
                  buildHookId: '5f44d66835d67463b264b214',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rtks99m5',
                  apiId: '95ad7a92-23eb-483e-ac9f-99b9b0860876'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Vineshg/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rtks99m5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
