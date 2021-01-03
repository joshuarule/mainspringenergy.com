import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([

        S.listItem()
            .title('Home')
            .child(
                S.document()
                    .schemaType('home')
                    .documentId('home')
            ),
        S.listItem()
            .title('Solutions')
            .child(
                S.document()
                    .schemaType('solutions')
                    .documentId('solutions')
            ),
        S.listItem()
            .title('Technology')
            .child(
                S.document()
                    .schemaType('technology')
                    .documentId('technology')
            ),
        S.listItem()
            .title('Vision')
            .child(
                S.document()
                    .schemaType('vision')
                    .documentId('vision')
            ),
        S.listItem()
            .title('Careers')
            .child(
                S.document()
                    .schemaType('careers')
                    .documentId('careers')
            ),
        S.listItem()
            .title('Jobs')
            .child(
                S.document()
                    .schemaType('jobs')
                    .documentId('jobs')
            ),
        S.listItem()
            .title('Roles')
            .child(
                S.document()
                    .schemaType('roles')
                    .documentId('roles')
            ),
        S.listItem()
            .title('Company')
            .child(
                S.document()
                    .schemaType('company')
                    .documentId('company')
            ),

        ...S.documentTypeListItems().filter(listItem => !['home', 'solutions', 'technology', 'vision', 'careers', 'jobs', 'roles', 'company'].includes(listItem.getId()))
    ])