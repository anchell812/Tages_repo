class SqlQueries {


    getAllFeebacks(date) {
        return `select [database].[table].[column] as name, [database].[table].[column] as phone, [database].[table].[column] as company, [database].[table].[column] as email, [database].[table].[column] as comment  where Date = ${date}`;
    }

}

module.exports = new SqlQueries();