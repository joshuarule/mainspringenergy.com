import S from '@sanity/desk-tool/structure-builder'
import { FiSettings } from 'react-icons/fi'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .showIcons(false)
            .items([
              S.listItem()
                .title('Home')
                .child(S.document().schemaType('home').documentId('home')),
              S.listItem()
                .title('Solutions')
                .child(S.document().schemaType('solutions').documentId('solutions')),
              S.listItem()
                .title('Technology')
                .child(
                  S.document().schemaType('technology').documentId('technology')),
              S.listItem()
                .title('Vision')
                .child(S.document().schemaType('vision').documentId('vision')),
              S.listItem()
                .title('Careers')
                .child(S.document().schemaType('careers').documentId('careers')),
              S.listItem()
                .title('Company')
                .child(S.document().schemaType('company').documentId('company')),
              S.listItem()
                .title('Jobs')
                .child(S.document().schemaType('jobs').documentId('jobs')),
            ])
        ),
      // Add a visual divider (optional)
      S.divider(),
      ...S.documentTypeListItems().filter(
        listItem =>
          ![
            'home',
            'solutions',
            'technology',
            'vision',
            'careers',
            'jobs',
            'roles',
            'company',
            'jobs',
            'settings',
          ].includes(listItem.getId())
      ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(FiSettings)
        .child(S.document().schemaType('settings').documentId('settings')),
    ])
