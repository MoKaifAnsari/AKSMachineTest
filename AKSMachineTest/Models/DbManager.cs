using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;

namespace AKSMachineTest.Models
{
    public class DbManager
    {
        public static DataTable ExecuteProcess(string procedure, string[,] param)
        {
            SqlConnection connection = new SqlConnection("Data Source=KAIF\\SQLEXPRESS;Initial Catalog=AKS;Integrated Security=True");
            SqlCommand command = new SqlCommand(procedure, connection);
            command.CommandType = CommandType.StoredProcedure;
            for (int i = 0; i < param.Length / 2; i++)
            {
                command.Parameters.AddWithValue(param[i, 0], param[i, 1]);
            }
            SqlDataAdapter adapter = new SqlDataAdapter(command);
            DataTable dt = new DataTable();
            adapter.Fill(dt);
            return dt;
        }

        public static DataTable ExecuteProcess(string procedure)
        {
            SqlConnection connection = new SqlConnection("Data Source=KAIF\\SQLEXPRESS;Initial Catalog=AKS;Integrated Security=True");
            SqlCommand command = new SqlCommand(procedure, connection);
            command.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter adapter = new SqlDataAdapter(command);
            DataTable dt = new DataTable();
            adapter.Fill(dt);
            return dt;
        }

        public static StringBuilder GridView(DataTable table, string id, string RemoveColumn = "", bool Edit = true, bool Delete = true)
        {
            StringBuilder st = new StringBuilder();
            if (table.Columns.Count > 0)
            {
                st.Append("<table class='table table-responsibe'>");
                st.Append("<tr style='background:#484747;color:white;font-weight:bold;'>");
                for (int i = 0; i < table.Columns.Count; i++)
                {
                    if (table.Columns[i].ToString() != RemoveColumn)
                    {
                        st.Append("<td>" + table.Columns[i] + "</td>");
                    }
                }
                if (id != "" && Edit == true)
                {
                    st.Append("<td>Edit</td>");
                }
                if (id != "" && Delete == true)
                {
                    st.Append("<td>Delete</td>");
                }
                st.Append("</tr>");
            }
            if (table.Rows.Count > 0)
            {
                for (int i = 0; i < table.Rows.Count; i++)
                {
                    st.Append("<tr>");
                    for (int j = 0; j < table.Columns.Count; j++)
                    {
                        if (table.Columns[j].ToString() != RemoveColumn)
                        {
                            st.Append("<td>" + table.Rows[i][j] + "</td>");
                        }
                    }
                    if (id != "" && Edit == true)
                    {
                        st.Append("<td><button type='button' class='btn btn-success' onclick='Edit(" + table.Rows[i][id].ToString() + ")'>Edit</i></td>");
                    }
                    if (id != "" && Delete == true)
                    {
                        st.Append("<td><button type='button' class='btn btn-danger' onclick='Delete(" + table.Rows[i]["AddCategoryId"].ToString() + ")'>Delete</i></td>");
                    }
                    st.Append("</tr>");
                }
            }
            st.Append("</table>");
            return st;
        }

        public static string SelectSingleValue(string TableName, string ColumnName, string Condition)
        {
            SqlConnection connection = new SqlConnection("Data Source=KAIF\\SQLEXPRESS;Initial Catalog=AKS;Integrated Security=True");
            string query = "Select " + ColumnName + " From " + TableName + " Where 1=1 and " + Condition;
            SqlCommand cmd = new SqlCommand(query, connection);
            connection.Open();
            string SingleValue = (string)cmd.ExecuteScalar();
            connection.Close();
            return SingleValue;
        }
    }
}